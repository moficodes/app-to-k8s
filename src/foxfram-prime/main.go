package main

import (
	"encoding/json"
	"foxfram-prime/prime"
	"math/rand"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/gorilla/mux"
)

type resp struct {
	Data []string `json:"data"`
}

var (
	// for Health
	// random chance that the healthcheck fails (for demo of healthcheck)
	chance int
)

func init() {
	rand.Seed(time.Now().UnixNano())
}

// EnvHandler Get Env information
func EnvHandler(w http.ResponseWriter, r *http.Request) {
	environment := make(map[string]string)
	for _, item := range os.Environ() {
		splits := strings.Split(item, "=")
		key := splits[0]
		val := strings.Join(splits[1:], "=")
		environment[key] = val
	}

	data, err := json.MarshalIndent(environment, "", "")
	if err != nil {
		data = []byte("Error marshalling env vars: " + err.Error())
	}

	w.Write(data)
}

func randomFailure() bool {
	chance = rand.Intn(10)
	if chance == 0 {
		return true
	}
	return false
}

// HealthHandler check the health of the app
func HealthHandler(w http.ResponseWriter, r *http.Request) {
	if randomFailure() {
		http.Error(w, "health check failed", http.StatusInternalServerError)
		return
	}
	w.Write([]byte("OK!"))
}

// PrimeHandler ...
func PrimeHandler(w http.ResponseWriter, r *http.Request) {
	numStr := mux.Vars(r)["number"]

	num, err := strconv.Atoi(numStr)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	s, err := prime.Primes(num)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	resp := resp{}
	resp.Data = make([]string, len(s.Data))

	for i, v := range s.Data {
		resp.Data[i] = strconv.Itoa(v)
	}

	data, err := json.MarshalIndent(resp, "", "")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(data)
}

func main() {
	r := mux.NewRouter()

	r.Path("/env").Methods("GET").HandlerFunc(EnvHandler)
	r.Path("/health").Methods("GET").HandlerFunc(HealthHandler)
	r.Path("/primes/{number}").Methods("GET").HandlerFunc(PrimeHandler)
	http.ListenAndServe(":8080", r)
}

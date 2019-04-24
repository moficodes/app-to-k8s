package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

type Sequence struct {
	Data []string `json:"data"`
}

func FibHandler(w http.ResponseWriter, r *http.Request) {
	numStr := mux.Vars(r)["number"]
	url := fmt.Sprintf("http://fib-service:80/fib/%s", numStr)
	handleRequest(w, url)
}

func FactHandler(w http.ResponseWriter, r *http.Request) {
	numStr := mux.Vars(r)["number"]
	url := fmt.Sprintf("http://factorial-service:80/factorial/%s", numStr)
	handleRequest(w, url)
}

func PrimeHandler(w http.ResponseWriter, r *http.Request) {
	numStr := mux.Vars(r)["number"]
	url := fmt.Sprintf("http://prime-service:80/primes/%s", numStr)
	handleRequest(w, url)
}

func handleRequest(w http.ResponseWriter, url string) {
	b := new(bytes.Buffer)
	req, err := http.NewRequest("GET", url, b)
	if err != nil {
		http.Error(w, "error talking to service", http.StatusNoContent)
	}
	req.Header.Add("Content-Type", "application/json")
	client := &http.Client{}
	res, err := client.Do(req)
	if err != nil {
		http.Error(w, "error talking to service", http.StatusNoContent)
	}
	defer res.Body.Close()
	body := Sequence{}
	json.NewDecoder(res.Body).Decode(&body)
	data, err := json.MarshalIndent(body, "", "")
	w.Header().Set("Content-Type", "application/json")
	w.Write(data)
}

func main() {
	r := mux.NewRouter()

	r.Path("/fib/{number}").Methods("GET").HandlerFunc(FibHandler)
	r.Path("/factorial/{number}").Methods("GET").HandlerFunc(FactHandler)
	r.Path("/primes/{number}").Methods("GET").HandlerFunc(PrimeHandler)

	r.PathPrefix("/").Handler(http.FileServer(http.Dir("frontend/build/"))).Methods("GET")

	http.ListenAndServe(":8080", r)
}

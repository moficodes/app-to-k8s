package prime

import (
	"errors"
	"math"
)

type Sequence struct {
	Data []int `json:"data"`
}

func Primes(limit int) (Sequence, error) {
	var s Sequence
	if limit < 2 {
		return s, errors.New("no prime number below 2")
	}
	sieve := make([]bool, limit+1)
	if limit == 2 {
		s.Data = make([]int, 1)
		s.Data[0] = 2
		return s, nil
	}
	if limit == 3 {
		s.Data = make([]int, 1)
		s.Data[0] = 2
		s.Data[1] = 3
		return s, nil
	}

	size := int64((float64(limit) / math.Log(float64(limit)) * 1.25))

	s.Data = make([]int, size)
	s.Data[0] = 2
	s.Data[1] = 3

	sieve[2] = true
	sieve[3] = true

	for x := 1; x*x < limit; x++ {
		for y := 1; y*y < limit; y++ {
			n := (4 * x * x) + (y * y)
			if n <= limit && (n%12 == 1 || n%12 == 5) {
				sieve[n] = !sieve[n]
			}
			n = (3 * x * x) + (y * y)
			if n <= limit && n%12 == 7 {
				sieve[n] = !sieve[n]
			}
			n = (3 * x * x) - (y * y)
			if x > y && n <= limit && n%12 == 11 {
				sieve[n] = !sieve[n]
			}
		}
	}

	for r := 5; r*r < limit; r++ {
		if sieve[r] {
			for i := r * r; i < limit; i += r * r {
				sieve[i] = false
			}
		}
	}

	count := 2

	for i := 5; i < limit; i++ {
		if sieve[i] {
			s.Data[count] = i
			count++
		}
	}
	s.Data = s.Data[:count]
	return s, nil
}

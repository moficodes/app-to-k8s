package fib

import (
	"errors"
	"math/big"
)

// Sequence stores a fibonacci sequence
type Sequence struct {
	Data []*big.Int `json:"data"`
}

// Fib takes an int and returns either a sequence of fib number or error
func Fib(n int) (Sequence, error) {
	var s Sequence
	if n < 0 {
		return s, errors.New("need some positive integer to generate fib sequence")
	}
	s = Sequence{Data: make([]*big.Int, n)}
	if n == 0 {
		return s, nil
	}
	if n == 1 {
		s.Data[0] = big.NewInt(0)
		return s, nil
	}
	s.Data[0] = big.NewInt(0)
	s.Data[1] = big.NewInt(1)

	for i := 2; i < n; i++ {
		s.Data[i] = big.NewInt(0)
		s.Data[i].Add(s.Data[i-1], s.Data[i-2])
	}
	return s, nil
}

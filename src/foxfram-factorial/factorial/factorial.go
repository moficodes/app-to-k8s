package factorial

import (
	"errors"
	"math/big"
)

// Sequence stores a fibonacci sequence
type Sequence struct {
	Data []*big.Int `json:"data"`
}

// Fib takes an int and returns either a sequence of fib number or error
func Factorial(n int) (Sequence, error) {
	var s Sequence
	if n < 0 {
		return s, errors.New("need some positive integer to generate factorial sequence")
	}
	s = Sequence{Data: make([]*big.Int, n+1)}
	if n == 0 {
		return s, nil
	}
	if n == 1 {
		s.Data[0] = big.NewInt(1)
		return s, nil
	}
	s.Data[0] = big.NewInt(1)
	s.Data[1] = big.NewInt(1)

	for i := 2; i <= n; i++ {
		s.Data[i] = big.NewInt(int64(i))
		s.Data[i].Mul(s.Data[i], s.Data[i-1])
	}
	return s, nil
}

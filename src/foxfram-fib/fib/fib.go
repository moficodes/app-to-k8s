package fib

import "errors"

// Sequence stores a fibonacci sequence
type Sequence struct {
	data []int
}

func fib(n int) (Sequence, error) {
	if n < 0 {
		errors.New("need some positive integer to generate fib sequence")
	}
	s := Sequence{data: make([]int, n)}
	if n == 1 {
		s.data[0] = 0
		return s, nil
	} else if n == 2 {
		s.data[0] = 0
		s.data[1] = 1
		return s, nil
	}

	for i := 2; i < n; i++ {
		s.data[i] = s.data[i-1] + s.data[i-2]
	}
	return s, nil
}

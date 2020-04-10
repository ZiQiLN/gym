package main

import "fmt"

// Definign a constant of type float32 at package-level
const c float32 = 1.14

// Defining a multiple constants (number, string) at the same time.
const (
	// Defining a const called number with value 1
	number = 1
	// Defining a const called string with value "hello"
	string = "hello"
	// Defining const one with IOTA value
	one = iota
	// Defining const two with IOTA value
	two = iota
)

/* Everytime we'll use a IOTA it's get incremented by one, IOTA get's reseted between different constant blocks like one upper. */

func main() {
	// Prining a value of constant defined in package
	fmt.Print(c)
	// Printing values of multiple constants previously defined at one time.
	fmt.Print(number, string)
	// Printing values of our IOTAs.
	fmt.Print(one, two)
}

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

	// Defining a new constant stable with value 1.13 of type float32
	const stable float32 = 1.13

	/* Constant in Go language works exactly as a variable but a main difference between them is that constant cannot be overwrited or changed, it holds a value with it was defined. In case where we'll want to overwrite this value we'll get an error. */

	// Printing out a value of constant stable.
	fmt.Print(stable)

	// Printing a value of constant stable with added value 1.13
	fmt.Print(stable + 1.13)

	// Prining a value of constant defined in package
	fmt.Print(c)
	// Printing values of multiple constants previously defined at one time.
	fmt.Print(number, string)
	// Printing values of our IOTAs.
	fmt.Print(one, two)
}

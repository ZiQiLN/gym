package main

import "fmt"

func main() {

	// Defining a new constant stable with value 1.13 of type float32
	const stable float32 = 1.13

	/* Constant in Go language works exactly as a variable but a main difference between them is that constant cannot be overwrited or changed, it holds a value with it was defined. In case where we'll want to overwrite this value we'll get an error. */

	// Printing out a value of constant stable.
	fmt.Print(stable)

	// Printing a value of constant stable with added value 1.13
	fmt.Print(stable + 1.13)
}

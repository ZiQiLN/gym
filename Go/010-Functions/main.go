package main

import "fmt"

// Defining a off-main function called helloWorld.
func helloWorld() {
	fmt.Println("Hello World")
}

// Defining a function with two arguments (x and y) of int type.
// These arguments can be used only in a body of function calculateNumbers() and works like a normal variable.
func calculateNumbers(x int, y int) {
	// Adding two numbers to recive a sum.
	var result = x + y
	// Printing out a result of math.
	fmt.Println(result)
}

// Defining a function to check that a argument number is odd or is not, in case when given number is odd function will return a bool with value true in other case false.
func isOdd(x int) bool {
	if x%2 == 0 {
		return true
	} else {
		return false
	}
}

// Function called main is interpreted as a entry point.
func main() {
	// Running a function helloWorld(), which prints a "Hello World".
	helloWorld() // "Hello World"
	// Running a function with two arguments.
	calculateNumbers(10, 20) // 30
	// Running a fuction to check that given number is odd, and attach result to variable v, (because we're using return in our function.)
	v := isOdd(11)
	// Printing a value of v variable
	fmt.Println(v)
}

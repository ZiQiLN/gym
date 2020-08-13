```go
package main

import "fmt"

func main() {
	// Pointers are variables that are used to store memory address of other variables, we can a declare a one using asterisk (*) before variable type.
	var sample *string = new(string)
	// Our actual program will return a <nil> which in Go terminology means a empty pointer, when we'll try to assign a value to this pointer in following way `sample = "Hello World"`, we'll get a error because we haven't specified a pointer to store that value.
	fmt.Print(sample, "\n")
	// We can use a "dereference" operation to assign a value to our pointer,
	*sample = "Hello World"

	// Defining a variable that holds a value
	helloWorld := "A big earth!"
	// Printing out our variable
	fmt.Print(helloWorld, "\n")
	// Creating a pointer to variable helloWorld
	pointer := &helloWorld
	// Printing out a location of pointer and value which is referenced by specified pointer.
	fmt.Print(pointer, *pointer, "\n")
	// Changing a value of variable helloWorld.
	helloWorld = "Mars is awesome!"
	// Printing out a location of pointer and value which is referenced by specified pointer, refilled with new data.
	fmt.Print(pointer, *pointer, "\n")
}
```

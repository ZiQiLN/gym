```go
// Initializing a new package called main
package main

// Importing a fmt package
import (
	"fmt"
)

// Declaring a function called Main
func main() {

	// Initializing a new variable named "number" with type of integrer.
	var number int

	// Aliging a value equal to 42 to variable named "number"
	number = 42

	// Printing out a value of variable "number" with a line break statement.
	fmt.Print(number, "\n")

	// Initializing a floating-point variable, in Go there are two types of floating-point variables a float32s and float64s which represents a bits of specified variable - 32bit and 64bit. We can also directly add a value to specified variable by using a "=" and then value.
	var float float32 = 13.37
	fmt.Print(float, "\n")

	// Golang have also support for contants, which are a read-only variables.
	const helloWorld string = "Hello World as Constant"

	// Golang have also a quick way for defining a new variables, which is more comfortable to use when we need define something on the fly. This method automatically resolving a type of variable.
	sampleVariable := "Hello World"
	fmt.Print(sampleVariable, "\n")
}
```

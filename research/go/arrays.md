```go
package main

import "fmt"

/* Array is fixed-size collection of simillar data types.*/

func main() {
	// Creating a new array called arr with 3 integrer elements.
	var arr [3]int
	// Aligning a value 1 to first spot in array, repeated manually three times to every other place in array.
	arr[0] = 1
	arr[1] = 3
	arr[2] = 6
	// Printing a variable arr which is array
	fmt.Print(arr) // [ 1 3 6 ]
	// Printing a array element with specified index
	fmt.Print(arr[1]) // 1

	// Definining a array in simplified way with instant declaration of values contained in array that we declared.
	array := [3]int{1, 3, 6}
	fmt.Print(array) // [ 1 3 6 ]
}
```

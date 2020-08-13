```go
package main

import "fmt"

func main() {
	// Defining a map datatype called m, with a string keys and integrer values, intialized with key "foo" which holds value 1337
	m := map[string]int{"foo": 1337}
	// Printing complete m map.
	fmt.Println(m) // map[foo:1337]
	// Printing a value of specified key from our m map.
	fmt.Println(m["foo"]) // 1337
	// Overwriting a value of key 'foo' with value 2137
	m["foo"] = 2137
	// Printing out a changed value.
	fmt.Println(m["foo"]) // 2137
	// Deleting a "foo" key from our m map.
	delete(m, "foo")
	// Printing complete m map, with deleted key "foo"
	fmt.Println(m) // map[]
}
```

# Modules in Go

- New module was created with `go mod init github.com/ziqiln/gym`
- We can run our `main.go` file with using a `go run main.go` or running a module that we've defined `go run github.com/ziqiln/gym`

```
main.go
```

```go
// Initializing a main package.
package main

// Importing a 'fmt' package which allows to IO Events.
import "fmt"

// Declaring a main function.
func main() {
	// Using a print function to std::out a string with "Hello World"
	fmt.Print("Hello World")
}
```

```
go.mod
```

```go
// File created using a following command...
// go mod init github.com/ziqiln/gym

module github.com/ziqiln/gym

go 1.14
```

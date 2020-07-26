# Go CLI Playbook

> The Go programming language is an open-source project to make programmers **more productive**

## Building and Running Go programs

### `go run <file>`

`go run` is one of simplest yet powerful commands in Go CLI, this command allows us to compile and run our source code without leaving any compilation files in our disk. That command is very useful for development and it's not recommended to use in production environment.

`-race` flag shows us a console output from concurrency code written in Go, it's useful in debugging when we're using GoRoutines.

### `go build <package>`

`go build` compiles packages specified packages, along with their dependencies - but not install the compiled program. In simplified words, it compiles our application to binary application that can be run on different platforms.

Let's say that we have a `hello.go` file with `package main` inside which basically prints a "Hello World", we can use command `go build main` to get a compiled binary called `main`.

We can use a `-o` flag to modify a output file, for example `-o dist/output`, which will create a binary caled `output` in `dist` folder.

Another useful flag is `-i`, which will install intermediate dependencies that we have in our source code, it will create a `pkg` folder with our dependencies.

`-buildmode`, allows us to manage a library output and compilation options.

#### Compiling Go libraries to C language

Let's imagine again that we have a `main` package, with basic hello world and additional `C` library. When building we'll use a `-buildmode=c-archive`, which will result in `main.a` and `main.h`. And we have our C-based header to include in our C application.

### `go install <package>`

`go install` compiles a library and installs compiled library in our GOPATH or local project folder (`pkg`), if we'll have a program with `main()` function, go will create a `bin` folder with executables.

## Testing Go Applications

### `go test <package>`

`go test` runs a tests contained in our code repository, we're running a `go test` specifiying a package to test, but we're able to run a tests for whole directory using a wildcard - `go test src/...`

Let's imagine a example where we have a package named `library` with code presented bellow and we want to run a specified in code tests, we'll simplify use a `go test library` command.

```go
package library

import "testing"

func testBasics(t *testing.T) {
	if 10-5 != 5 {
		t.Error("WTF is going on...")
	}
}
```

`-v` flag provides our detailed view about tests, which have passed and which have failed.

#### Testing a code coverage

To generate a code coverage test, we can simplify use a `-cover` flag in our source code, as a alternative we can use a `-coverpkg <packages>` flah, which will chceck a coverage of specified packages.

There is an option to generate a file with informaton about our coverage using a `-coverprofile <file>` flag.

To generate a `.html` file with our source code coverage, we can use a something different then `go test`, namely `go tool` with `cover` function and `-html` flag which will take a actual cover-profile and render it in `.html` file.

```
go test -covermode count -coverprofile codeCoverage.out library
go tool cover -html=codeCoverage.out
```

#### Benchmarking a packages

Golang allows us to benchmark a speed our of code executed in real time. Let's get into example with some simple code.

```go
// library.go file
package library

func calculateNumbers(x int, y int) int {
	var result = x + y
	return result
}


// library_test.go file
package library

import "testing"

func TestCalculateNumbers(t *testing.T) {
	if calculateNumbers(10, 30) != 30 {
		t.Fail()
	}
}

func BenchmarkCalculateNumbers(b *testing.B) {
	for i := 0; i < b.N; i++ {
		calculateNumbers(5, 15)
	}
}
```

We can run out a tests for our files with `go test -v library` but that will not trigger a benchmark, if we want to trigger a benchmark test we need to use `-bench` flag, so our command will look like `go test -bench calculateNumbers library`. If we want to run all benchmark tests contained in test files, we should use a `go test -bench . library`.

There is also a next useful flag called `-benchtime <time>`, which allows us to perform tests within specified time, it's useful when our application takes long to perform a one-time events, and then work faster so we're able to get averaged benchmark of performance, let's use that in code defined before - `go test -benchtime 10s -bench . library`. We can also request informations about memory used by our application by passing out a `-benchmem` flag.

### Profiling Packages

Golang gives our opportunity to create a different types of profiles such as memory or cpu, let's start with some example code.

```go
// library.go file
package library

import "fmt"

func SampleFunction(x string, y string) string {
	result := fmt.Sprintf("%v, %v" , x, y)
	return result
}


// library_test.go file
package library

import "testing"

func TestSampleFunction(t *testing.T) {
	if SampleFunction("Hello", "World") != "Hello, World" {
		t.Fail()
	}
}
```

#### Memory Profiles

`go test -memprofile mem.out library`, generating a memory profile of our application using a `-memprofile <outputFike>` flag, sometimes we need to add a `-memprofilerate` flag, which will generate a memory profile in every single command (some application may take tests so fast to take a memory snapshot, so we can add a `-memprofilerate 1` flag to snapshot memory every single command.)

We can visualise our output in `.html` by using a `graphviz` application for example - it can be downloaded from https://www.graphviz.org/ and it's available for Linux, Windows and Mac.

There is also a `go tool pprof` function that allows us to visualise profiles in `.html` with a `-web` flag, full command will look like `go tool pprof -web library.test mem.out`

#### CPU Profiles

`go test -cpuprofile cpu.out library`, generating a CPU profile of our application, by using a `cpuprofile <outputFile` flag, which is very similar way to memory profiling. Again our application is too small to see any output, so there we need to add additional `-count <value>` flag with value equal to 200000 (that means repeats of code).

`go tool pprof -web library.test cpu.out`, visualising a CPU Profile in same way as Memory Profile does.

#### Traces

Traces allows us to see GoRoutines that was ran, different kinds of resources used in execution of program and much more advanced runtime analyzation.

`go test -trace trace.out library`, generates a trace file. To analyse this data we'll not use a `pprof` tool as before but `trace` tool. So our command will be `go tool trace trace.out`

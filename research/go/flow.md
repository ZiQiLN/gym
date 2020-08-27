# Control Flow
Introduction to **Control Flow** in [[go]] applications.

```go
package main

import "fmt"

func main() {
	// Creating a loop which will run until condition will be achiveved.
	// This loop will print index value unitl index value will be equal to 10.
	for index := 0; index < 5; index++ {
		fmt.Println(index)
	}

	// Creating a infinite loop that will be running till' you'll call a break statement, with a variable i that is required to stop a loop.
	var i int
	for {
		if i > 3 {
			break
		}
		i++
		println(i)
	}

	// Sample slice with three integrers.
	slice := []int{1, 2, 3}

	// Ugly loop to print our a data contained in slice.
	for i := 0; i < len(slice); i++ {
		fmt.Println(slice[i])
	}

	// Pretty way to print our data contained in slice.
	for _, v := range slice {
		fmt.Println(v)
	}

	// We can also print our data with a actual index value in same way.
	for k, v := range slice {
		fmt.Println(k, " | ", v)
	}

	/* if() statements are used to run a specific code when specific condition will be reached, useage of if() statement looks following.

	  if(condition) {
	  // do_something
	} else {
	  // do_something_when_condition_is_not_reached
	}
	*/

	var number int = 5

	if number == 5 {
		fmt.Println("Our Number is equal to 5")
	} else {
		fmt.Println("Our Number isn't a 5")
	}

	/* When we're developing an application, and our application will get into state which should not been reached, for example when our application highly depends on database, and database connection could not been estabilished - we can throw a panic that will send a singal to exit application.

	Panic is threated as a error which have possiblitiy of recover, but when panic is not recovered - will cause a stop of application.
	*/

	panic("Our fucking application broke! What a suprise?!")

}
```

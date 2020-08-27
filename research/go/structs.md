```go
package main

import "fmt"

func main() {

	// Defining a `game` type which is a struct, and have three properties (two strings and one integrer)
	type game struct {
		ID     int
		name   string
		genere string
	}

	// Initializing a variable g which is a game type.
	var g game
	// Printing out actual g variable with type of game struct.
	fmt.Println(g) // {0  }

	/* We've got a ourput equal to {0  } because, default value of empty integrer is 0, and for string it is " ", we have not put data into our g variable so output is default. */

	// Adding a value to ID property of g variable.
	g.ID = 1
	// Adding a value to name property of g variable.
	g.name = "World of Warcraft"
	// Adding a value to genere property of g variable.
	g.genere = "MMO RPG"

	// Printing out a g variable with data we've put a while before.
	fmt.Println(g) // {1 World of Warcraft MMO RPG}
	// Printing out a value of specified property of g variable.
	fmt.Println(g.name)

	// Defining a variable with type in faster way.
	g1 := game{ID: 2, name: "League of Legends", genere: "MOBA"}
	// Printing out a variable that we defined.
	fmt.Println(g1)
}
```

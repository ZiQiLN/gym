package main

import "fmt"

func main() {

	// Defining a new array called arr with three values inside with type of int.
	arr := [3]int{1, 2, 3}
	// Defining a slice that contains a complete array called arr.
	slice := arr[:]
	// Printing out a arr and slice
	fmt.Println(arr, slice)

	// Chaning a value of index 0 in arr to 100
	arr[0] = 100
	// Chaning a value of index 1 in slice to 200
	slice[1] = 200

	// Printing out a arr and slice with changed data.
	fmt.Println(arr, slice)

	/* We're able to see that, data we've changed in slice was changed in our array too, it's because that slices actually points to arrays and operates on their data. */

	// Initialization of new slice without specified capatibility, with three numbers inside.
	slc := []int{1, 2, 3}
	// Printing a slice named slc
	fmt.Println(slc) // [1 2 3]
	// Overwritng a slice called slc with append() function with a slc slice and inegrer with value 4, in simplified words we're adding a 4 to our slice.
	slc = append(slc, 4)
	fmt.Println(slc) // [1 2 3 4]

	// Creating a slice called s starting at index 1 and going to the end.
	s := slc[1:]
	// Creating a slice called s1 starting from start and ending at index 3.
	s1 := slc[:3]
	// Creating a slice called s2 starting from index 1 and ending at index 2
	s2 := slc[1:2]

	// Printing out slices defined before.
	fmt.Println(s, s1, s2) // [ 2 3 4 ] [ 1 2 3 4 ] [ 2 3 ]
}

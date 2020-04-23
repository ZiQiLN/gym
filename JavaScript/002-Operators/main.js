/* Numbers are crucial element of every application, and we're able to do a lot of things with them, such as subscract, add, multiply and much more. Formerly these actions are named Arithmetic Operators, and they are used to perform mathematical operations between numeric operands. */

// Defining a three variables with three different values.
let x = 5
let y = 10
let z = 15

// Adding variable x to variable y
x + y // 15

// Subscracting variable x from y
y - x // 5

// Multpling variable x by y
x * y // 50

// Diversing y by x
y / x // 2

// Modulos of x by 2.
// Modulos reurns remainder of two operands.
x % 2 // 1

// Incrementation
x++ // 6

// Decrementation
x-- // 4

/* We can also use arithmical operators on strings */
"Hello" + 5 // "Hello5"
"Hello" + "World" // "HelloWorld"

/* Comparision Operators

Comparision operators compares two operands and returns a boolean value (true or false) depending on specified condition. */

let a = 5
let b = 10
let c = "5"

// Comparing equality of two operands without considering type.

a == c // true

// Comparing equality of two operands and their types.

a === c // false

// Comparing inequality of two operands

a !== c // false

// Checking whether left side value is greater than right side value. If yes then returns true otherwise false.

a > b; // false

// Checking whether left operand is less than right operand. If yes then returns true otherwise false.

a < b; // true

// Checking whether left operand is greater than or equal to right operand. If yes then returns true otherwise false.

a >= b; // false

// Checking whether left operand is less than or equal to right operand. If yes then returns true otherwise false.

a <= b; // true


/* Logical Operators

Logical operators are used to combine two or more conditions. */

/* && - known as AND operator. It checks whether two operands are non-zero (0, false, undefined, null or "" are considered as zero), if yes then returns 1 otherwise 0. */

(a != b) && (a < b); // true

/* || - known as OR operator. It checks whether any one of the two operands is non-zero (0, false, undefined, null or "" is considered as zero).  */

(a > b) || (a == b); // false
(a < b) || (a == b); // true

/* ! is known as NOT operator. It reverses the boolean result of the operand (or condition) */

!(a < b); // false
!(a > b); // true


/* Assignment Operators

JavaScript includes assignment operators to assign values to variables with less key strokes.  */

x = 5
y = 10
z = 15

// Assigns right operand value to left operand.
x = y // x = 10

// Sums up left and right operand values and assign the result to the left operand.
x += 1 // x = 6

// Subtract right operand value from left operand value and assign the result to the left operand.
x -= 1 // x = 4

// Multiply left and right operand values and assign the result to the left operand.
x *= 5 // x = 25

// Divide left operand value by right operand value and assign the result to the left operand.
x /= 5 // x = 1

// Get the modulus of left operand divide by right operand and assign resulted modulus to the left operand.
x %= 2 // x = 1


/* Ternary Operator

JavaScript includes special operator called ternary operator :? that assigns a value to a variable based on some condition. This is like short form of if-else condition.

<condition> ? <value1> : <value2>
*/

a = 10
b = 5

let c = a > b ? a : b; // c = 10
var d = a > b ? b : a; // d = 5

# `002` JavaScript: Operators

JavaScript includes operators as in other languages. An operator performs some operation on single or multiple operands (data value) and produces a result. For example 1 + 2, where + sign is an operator and 1 is left operand and 2 is right operand. + operator adds two numeric values and produces a result which is 3 in this case.

JavaScript includes following categories of operators.

- Arithmetic Operators
- Comparison Operators
- Logical Operators
- Assignment Operators
- Conditional Operators

## Arithmetic Operators

Arithmetic operators are used to perform mathematical operations between numeric operands.

| Operator | Description                                          |
| -------- | ---------------------------------------------------- |
| `+`      | Adds two numeric operands.                           |
| `-`      | Subtract right operand from left operand             |
| `*`      | Multiply two numeric operands.                       |
| `/`      | Divide left operand by right operand.                |
| `%`      | Modulus operator. Returns remainder of two operands. |
| `++`     | Increment operator. Increase operand value by one.   |
| `--`     | Decrement operator. Decrease value by one.           |

```js
// Defining a three variables with three different values.
let x = 5;
let y = 10;
let z = 15;

// Adding variable x to variable y
x + y; // 15

// Subscracting variable x from y
y - x; // 5

// Multpling variable x by y
x * y; // 50

// Diversing y by x
y / x; // 2

// Modulos of x by 2.
x % 2; // 1

// Incrementation
x++; // 6

// Decrementation
x--; // 4

/* We can also use arithmical operators on strings */
"Hello" + 5; // "Hello5"
"Hello" + "World"; // "HelloWorld"
```

## Comparison Operators

JavaScript language includes operators that compare two operands and return Boolean value true or false.

| Operators | Description                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------- |
| `==`      | Compares the equality of two operands without considering type.                                                  |
| `===`     | Compares equality of two operands with type.                                                                     |
| `!=`      | Compares inequality of two operands.                                                                             |
| `>`       | Checks whether left side value is greater than right side value. If yes then returns true otherwise false.       |
| `<`       | Checks whether left operand is less than right operand. If yes then returns true otherwise false.                |
| `>=`      | Checks whether left operand is greater than or equal to right operand. If yes then returns true otherwise false. |
| `<=`      | Checks whether left operand is less than or equal to right operand. If yes then returns true otherwise false.    |

```js
let a = 5;
let b = 10;
let c = "5";

// Comparing equality of two operands without considering type.

a == c; // true

// Comparing equality of two operands and their types.

a === c; // false

// Comparing inequality of two operands

a !== c; // false

// Checking whether left side value is greater than right side value. If yes then returns true otherwise false.

a > b; // false

// Checking whether left operand is less than right operand. If yes then returns true otherwise false.

a < b; // true

// Checking whether left operand is greater than or equal to right operand. If yes then returns true otherwise false.

a >= b; // false

// Checking whether left operand is less than or equal to right operand. If yes then returns true otherwise false.

a <= b; // true
```

## Logical Operators

Logical operators are used to combine two or more conditions. JavaScript includes following logical operators.

| Operator | Description                                                                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `&&`     | && is known as AND operator. It checks whether two operands are non-zero (0, false, undefined, null or "" are considered as zero), if yes then returns 1 otherwise 0. |
| `\|\|`   | \|\| is known as OR operator. It checks whether any one of the two operands is non-zero (0, false, undefined, null or "" is considered as zero).                      |
| `!`      | ! is known as NOT operator. It reverses the boolean result of the operand (or condition)                                                                              |

```js
let a = 5;
let b = 10;
let c = "5";

a != b && a < b; // true

a > b || a == b; // false
a < b || a == b; // true

!(a < b); // false
!(a > b); // true
```

## Assignment Operators

JavaScript includes assignment operators to assign values to variables with less key strokes.

| Operator | Description                                                                                              |
| -------- | -------------------------------------------------------------------------------------------------------- |
| `=`      | Assigns right operand value to left operand.                                                             |
| `+=`     | Sums up left and right operand values and assign the result to the left operand.                         |
| `-=`     | Subtract right operand value from left operand value and assign the result to the left operand.          |
| `*=`     | Multiply left and right operand values and assign the result to the left operand.                        |
| `/=`     | Divide left operand value by right operand value and assign the result to the left operand.              |
| `%=`     | Get the modulus of left operand divide by right operand and assign resulted modulus to the left operand. |

```js
x = 5;
y = 10;
z = 15;

// Assigns right operand value to left operand.
x = y; // x = 10

// Sums up left and right operand values and assign the result to the left operand.
x += 1; // x = 6

// Subtract right operand value from left operand value and assign the result to the left operand.
x -= 1; // x = 4

// Multiply left and right operand values and assign the result to the left operand.
x *= 5; // x = 25

// Divide left operand value by right operand value and assign the result to the left operand.
x /= 5; // x = 1

// Get the modulus of left operand divide by right operand and assign resulted modulus to the left operand.
x %= 2; // x = 1
```

## Ternary Operator

JavaScript includes special operator called ternary operator :? that assigns a value to a variable based on some condition. This is like short form of if-else condition.

```js
condition ? valueOne : valueTwo;
```

Ternary operator starts with conditional expression followed by ? operator. Second part ( after ? and before : operator) will be executed if condition turns out to be true. If condition becomes false then third part (after :) will be executed.

```js
a = 10;
b = 5;

let c = a > b ? a : b; // c = 10
var d = a > b ? b : a; // d = 5
```

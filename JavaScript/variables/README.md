# `001` JavaScript: Variables

Variable means anything that can vary. JavaScript includes variables which hold the data value and it can be changed anytime.

JavaScript uses reserved keyword var to declare a variable. A variable must have a unique name. You can assign a value to a variable using equal to (=) operator when you declare it or before using it.

```js
// Defining variable using let initializator. Variable is named "number" and holds value 133.7 with type of integrer.
let number = 133.7;

// Defining variable using let initializator. Variable is named "string" and holds value "Elton John" with type of string.
let string = "Elton John";

// Defining variable using let initializator. Variable is named "boolean" and holds value true with type of boolean.
let boolean = true;
```

## Loosely-typed Variables

Go or Rust has strongly typed variables. It means variable must be declared with a particular data type, which tells what type of data the variable will hold.

JavaScript variables are loosely-typed which means it does not require a data type to be declared. You can assign any type of literal values to a variable e.g. string, integer, float, boolean etc..

```js
var variable = 1; // numeric value

variable = "one"; // string value

variable = 1.1; // decimal value

variable = true; // Boolean value

variable = null; // null value
```

## Variable Naming

JavaScript names of variables can be started with "\_", "\$" or any letter, we cannot use a number as a first character in our variables but can use a number on a second place, let's dive into examples.

```js
// Valid
_hello, hello, $hello, h3ll0, hello_1337
// Bad
1hello
```

## Constants

In JavaScript Constant is a second method to declare a variable, the main difference between a let and const is a permission to write. When we're defining a constant we're not able to change it in comparision to let which can be changed.

```js
// Defining a constant using a const initialization, constant is named "creppyValue" and it's equal to 21.37. We're not able to change it later in code.
const creppyValue = 21.37;
```

## The `var` Keyword

`var` is very simillar to `let`, but it's more dangerous - because we don't get a good error handling when we're using a var. Generally this keyword is some kind of retarted methon, always use `let` over `var`.

```js
var sampleVariable = "Hell World";
```

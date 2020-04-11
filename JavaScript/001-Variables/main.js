/* In JavaScript there are three methods of declaring a new variable a let, var and const. In comparision to other languages such as C, Go and Rust. There we don't need to define a type of variable - JavaScript automatically resolves a type of specified variable. */

// Defining variable using let initializator. Variable is named "number" and holds value 133.7 with type of integrer.
let number = 133.7;

// Defining variable using let initializator. Variable is named "string" and holds value "Elton John" with type of string.
let string = "Elton John";

// Defining variable using let initializator. Variable is named "boolean" and holds value true with type of boolean.
let boolean = true;

/* Vaild Varable Names

JavaScript names of variables can be started with "_", "$" or any letter, we cannot use a number as a first character in our variables but can use a number on a second place, let's dive into examples.

Vaild: "_hello", "hello", "$hello", "h3ll0", "hello_1337"
Bad: "1hello"

*/

// Changing a value of variable called "string" from "Elton John" to "Hello World", that's not hard... huh?
string = "Hello World";

/* Constants

In JavaScript Constant is a second method to declare a variable, the main difference between a let and const is a permission to write. When we're defining a constant we're not able to change it in comparision to let which can be changed.
*/

// Defining a constant using a const initialization, constant is named "creppyValue" and it's equal to 21.37. We're not able to change it later in code.
const creppyValue = 21.37;

/* The Var Keyword.

var is very simillar to let, but it's more dangerous - because we don't get a good error handling when we're using a var. Generally this keyword is some kind of retarted methon, always use let over var.
*/

var sampleVariable = "Hell World";

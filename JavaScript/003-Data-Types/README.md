# `003` JavaScript: Datatypes

JavaScript includes data types similar to other programming languages like Go or Rust. Data type indicates characteristics of data. It tells the compiler whether the data value is numeric, alphabetic, date etc., so that it can perform the appropriate operation.

There are primitive and non-primitive data types.

Primitive Data Types:

- String
- Number
- Boolean
- Null
- Undefined

Non-Primitive Data Types:

- Object
- Date
- Array

JavaScript is dynamic / loosely-typed language which means a variable is able to hold value of any data type at any point of time - we can extend this weak side of JavaScript by usage of TypeScript or Flow which will provide a type safe programming.

```js
// Defining a variable called "variable"
let variable;

// Assigning a boolean to variable
variable = true;

// Assigning a null to variable
variable = null;

// Assigning a undefined to variable
variable = undefined;
```

## Datatype: `String`

String is a primitive data type in JavaScript. A string is textual content. It must be enclosed in single or double quotation marks.

```js
// Assigning a string to variable
variable = "Hello World";
```

Strings can be threaten as array data type, starting from zero index at first character.

```js
variable[0]; // H
variable[1]; // e
// etc.

// Checking a length of specified string
variable.length; // 11
```

Operators can be used also on strings, there are quick example of concatination.

```js
// Concatination of string.
var newVariable = variable + " from JavaScript"; // Hello World from JavaScript
```

Quotation marks inside string value that does not match the quotation marks surrounding the string value. For example, use single quotation marks if the whole string is enclosed with double quotation marks and visa-versa.

```js
variable = "This is 'simple' string";
variable = 'This is "simple" string';

/* We can include same quotes in a string value as surrounding quotes then use
backward slash (\) before quotation mark inside string value. */

variable = 'This is "simple" string';
variable = "This is 'simple' string";

// We can define a string using a object.
variable = new String("Hello World");
```

### `String` Methods

TODO: String Methods

## Datatype: `Number`

The Number is a primitive data type in JavaScript. Number type represents integer, float, hexadecimal, octal or exponential value. First character in a Number type must be an integer value and it must not be enclosed in quotation marks.

```js
var int = 100;
var float = 100.5;
var hex = 0xfff;
var exponential = 2.56e3;
var octal = 030;
```

#### Number Properties

The Number type includes some default properties. JavaScript treats primitive values as object, so all the properties and methods are applicable to both primitive number values and number objects.

| Property          | Description                                       |
| :---------------- | :------------------------------------------------ |
| MAX_VALUE         | Returns the maximum number value supported in JS  |
| MIN_VALUE         | Returns the smallest number value supported in JS |
| NEGATIVE_INFINITY | Returns negative infinity (-Infinity)             |
| NaN               | Represents a value that is not a number.          |
| POSITIVE_INFINITY | Represents positive infinity (Infinity).          |

```js
Number.MAX_VALUE;
Number.MIN_VALUE;
Number.POSITIVE_INFINITY;
Number.NaN;
Number.NEGATIVE_INFINITY;
```

### `Number` Methods

TODO: Number Methods

## Datatype: `Boolean`

Boolean is a primitive data type in JavaScript. Boolean can have only two values, true or false. It is useful in controlling program flow using conditional statements like if..else, switch, while, do..while.

```js
let boolean = true;

if (boolean) {
  // Something here will be executed
}

boolean = false;

if (boolean) {
  // Something here will be not executed
}
```

### `Boolean` Methods

TODO: Boolean Methods

## Datatype: `Null`

## Datatype: `Undefined`

## Datatype: `Object`

Object is a non-primitive data type in JavaScript. It is like any other variable, the only difference is that an object holds multiple values in terms of properties and methods. Properties can hold values of primitive data types and methods are functions.

JavaScript objects and JSON objects are different.

In other programming languages like Java or C#, you need a class to create an object of it. In JavaScript, an object is a standalone entity because there is no class in JavaScript. However, you can achieve class like functionality using functions. We will learn how to treat a function as a class in the advance JavaScript section.

Let's learn how to create an object in JavaScript.

In JavaScript, an object can be created in two ways:

- Object literal
- Object constructor

### Object Literal

The object literal is a simple way of creating an object using { } brackets. You can include key-value pair in { }, where key would be property or method name and value will be value of property of any data type or a function. Use comma (,) to separate multiple key-value pairs.

```js
// Creating a sample object with one key (sampleKey) which hold a value "sampleValue"
let sampleObject = {
  sampleKey: "sampleValue"
};

// Creating a object with few keys that hold different types of value, and function that will print a small information to console.
let rocket = {
  id: 1,
  model: "Falcon X",
  brand: "SpaceX",
  founder: "Elon Musk",
  lanchup: function() {
    console.log(
      `Starting a rocket ${this.model} No.${this.id}, produced by ${this.brand} founded by ${this.founder}`
    );
  }
};
rocket.lanchup(); // Starting a rocket Falcon X No.1, produced by SpaceX founded by Elon Musk

// We can get or set values of an object's properties using dot notation or bracket. However, you can call an object's method only using dot notation.

rocket.id; // 1
rocket.founder; // "Elon Musk"

rocket["id"]; // 1
rocket["founder"]; // Elon Musk
```

### Object Constructor

The second way to create an object is with Object Constructor using new keyword. You can attach properties and methods using dot notation. Optionally, you can also create properties using [ ] brackets and specifying property name as string.

```js
let rocketo = new Object();

// Attaching properties and methods to rocketo object
rocketo.id = 1;
rocketo["brand"] = "SpaceX";
// etc.
```

### Useful Practices in Objects

##### Undefined Property or Method

JavaScript will return 'undefined' if you try to access properties or call methods that do not exist.

If you are not sure whether an object has a particular property or not, then use hasOwnProperty() method before accessing properties.

```js
rocket = new Object();

rocket.id; // undefined

if (rocket.hasOwnProperty("id")) {
  rocket.id;
}
```

##### For...In Loop

Use for..in loop to get the list of all properties and methods of an object.

```js
for (let key in rocket) {
  console.log(key);
}
```

##### Referencing Objects

If, two objects point to the same object then the change made in one object will reflect in another object.

```js
var rocket = { name: "BFR" };
var secondRocket = rocket;

secondRocket.name = "PussyRiot";
rocket.name; // PussyRiot
```

##### Nested Objects

You can assign another object as a property of an object.

```js
var person = {
  firstName: "James",
  lastName: "Bond",
  age: 25,
  address: {
    id: 1,
    country: "UK"
  }
};

person.address.country; // "UK"
```

### `Object` Methods

TODO: Object Methods

## Datatype: `Date`

## Datatype: `Array`

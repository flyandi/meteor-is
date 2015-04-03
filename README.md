Meteor Is
======

Is for Meteor is a small library that provides some handy methods to quickly check or validate the contents of a variable. Especially useful if you need to know if an `object` is an actual `array` or an `object`.

## Install it

Install the library via the meteor command:

```meteor add flyandi:is```


## How to use it

Pretty straightforward. The library exposes `Is` that contains all the evaluating methods, e.g.:

```javascript

var AnArray = ['red', 'blue', green];

var AnObject = {color: 'red', background: 'green'};

if(Is.array(AnArray)) console.log("This is an array");

if(Is.object(AnObject)) console.log("This is an object");

```

## Methods

The Is library implements the following methods currently:

Method 			|	Description
---				|	---
`iterable`		|	Checks if an object can be iterated, e.g. `forEach`
`fn`			|	Returns true if the argument is an function
`object`		|	Returns true if the argument is an object
`array`			|	Returns true if the argument is an array
`string`		|	Returns true if the argument is an string
`number`		|	Returns true if the argument is an number
`boolean`		|	Returns true if the argument is an "true" boolean, e.g. `TRUE` or `FALSE`
`defined`		|	Returns true if the argument is defined, e.g. not `undefined`
`element`		|	Returns true if the argument is an HTMLElement
`empty`			|	Returns true if the argument is really empty
`same`			|	Returns true if two arguments are equal, e.g. ```Is.same('1', '1');```

Additionally the library also provides some basic validation expressions:

Method 			|	Description
---				|	---
`url`			|	Returns true if the argument contains a URL
`email`			|	Returns true if the argument contains an E-Mail
`creditcard`	|	Returns true if the argument contains an Credit Card Number
`alphanumeric`	|	Returns true if the argument contains an Alpha Numeric string
`time`			|	Returns true if the argument contains an time
`datestring`	|	Returns true if the argument contains an date string
`zip`			|	Returns true if the argument contains an ZIP Code
`phone`			|	Returns true if the argument contains a US Phone Number
`ssn`			|	Returns true if the argument contains a Social Security Number
`affirmative`	|	Returns true if the argument contains True, Yes or Ok
`hexadecimal`	|	Returns true if the argument contains a hexadecimal string
`hexcolor`		|	Returns true if the argument contains an HTML color



## Future

I have some ideas to add more evaluation methods to this as needed by myself. Feel free to contribute.

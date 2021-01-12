# @arkaraj/term
A simple npm package that can convert string to Uppercase/lowercase, join strings, and can do basic conversions in Height, Weight and Temperature it can also showcase time. It has 0 dependencies so its really light weight.

https://img.shields.io/npm/v/@arkaraj/term?logo=npm

## Documentation

### Contribution

Pull requests are always welcome! Please base pull requests against the main branch. Star it if you like it.

### Installation

```sh
$ npm i @arkaraj/term
```

### Importing

```javascript
// Using Node.js `require()`
const term = require('@arkaraj/term');

// Using ES6 imports
import term from '@arkaraj/term';
```

### Joining Words
Join words with any sign/symbol(+,-,$,%,etc..).
Takes in a String and a symbol

``` javascript
term.join(String, Symbol)
```

Default Symbol is blank

### UpperCase and LowerCase

This converts the given string to uppercase and lowercase strings 
This function takes in a string variable

```javascript
// UpperCase
const upperString = term.upperCase(String);

// LowerCase
const lowerString = term.lowerCase(String);
```

### Binary-to-Decimal Conversions

To convert from binary to decimal and vice versa. This accepts decimal places also(floating poin numbers).

The function returns in Number

```javascript
// Returns result the binary Number
const binary = term.toBinary(num: Number);

// Takes in the binary number and converts to Decimal
const decimal = term.toDecimal(num: Number);
```

### Height Conversions

This is for conversion of the height metrics/units like centimeters, meters, feet/foot and inches
This function takes in 3 parameters, the height in numbers the unit of the height the user has inputed and finally the unit the user wants to find the height in.

The funciton returns in Number

centimeters --> cm
meters --> m
feet --> ft
inches --> in

```javascript
const newHeight = term.height(num: Number, metric: String, convMetric: String);
```

### Weight Conversions

This is for conversion of the weight units like kilograms, pounds and ounces.
This function takes in 3 parameters, the weight in numbers the unit of the weight the user has inputed and finally the unit the user wants to find the weight in.

The funciton returns in Number

Kilograms --> kg
Pounds --> lb
Ounces --> oz

```javascript
const newHeight = term.weight(num: Number, metric: String, convMetric: String);
```

### Temparature Conversions

This is for conversion of the temparature units like Celsius, Fahrenheit and Kelvin.
This function takes in 3 parameters, the value in numbers the unit of the value the user has inputed and finally the unit the user wants to find the value in.

The funciton returns in Number

Celsius --> c
Fahrenheit --> f
Kelvin --> k

```javascript
const newTemp = term.temperature(num: Number, metric: String, convMetric: String);
```

### Getting Basic DateTime

This is to get the current Date time

```javascript
const time = term.getDate();
```


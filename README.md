# Casefyer

**Casefyer** is a simple and versatile npm package for converting text into various cases, such as uppercase, lowercase, sentence case, title case, alternating case, and inverse case. It's designed to help developers quickly and efficiently transform text.



## Table of Contents

* [Installation](#installation)
* [Features](#features)
* [Examples](#examples)


## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

To install `casefyer`, use npm:
```console
$ npm install casefyer
```


## Features
- **Uppercase Conversion**: Convert any text to uppercase letters.
- **Lowercase Conversion**: Convert any text to lowercase letters.
- **Sentence Case Conversion**: Automatically capitalize the first letter of each sentence.
- **Title Case Conversion**: Capitalize the first letter of each word in the text.
- **Alternating Case Conversion**: Convert text such that every other letter is capitalized.
- **Inverse Case Conversion**: Invert the case of each letter (uppercase becomes lowercase and vice versa).
- **Batch Processing**: Process an array of strings and convert them to the desired case in one function call.
- **Lightweight**: Minimal dependencies to keep your project lean and efficient.

## Examples
### 1. Uppercase Conversion
```javascript
const caseConverter = require('casefyer');

const text = "hello world";
const upperText = caseConverter.toUpperCase(text);
console.log(upperText); // Output: "HELLO WORLD"
```

### 2. Lowercase Conversion
```javascript
const caseConverter = require('casefyer');

const text = "HELLO WORLD";
const lowerText = caseConverter.toLowerCase(text);
console.log(lowerText); // Output: "hello world"
```

### 3. Sentence Case Conversion
```javascript
const caseConverter = require('casefyer');

const text = "hello. how are you? i am fine.";
const sentenceText = caseConverter.toSentenceCase(text);
console.log(sentenceText); // Output: "Hello. How are you? I am fine."
```

### 4. Title Case Conversion
```javascript
const caseConverter = require('casefyer');

const text = "hello world from casefyer";
const titleText = caseConverter.toTitleCase(text);
console.log(titleText); // Output: "Hello World From Casefyer"
```

### 5. Alternating Case Conversion
```javascript
const caseConverter = require('casefyer');

const text = "hello world";
const alternatingText = caseConverter.toAlternatingCase(text);
console.log(alternatingText); // Output: "hElLo wOrLd"
```

### 6. Inverse Case Conversion
```javascript
const caseConverter = require('casefyer');

const text = "Hello World";
const inverseText = caseConverter.toInverseCase(text);
console.log(inverseText); // Output: "hELLO wORLD"
```

### 7. Batch Processing
```javascript
const caseConverter = require('casefyer');

const texts = ["hello", "world", "casefyer"];
const upperTexts = caseConverter.toUpperCase(texts);
console.log(upperTexts); // Output: ["HELLO", "WORLD", "CASEFYER"]
```
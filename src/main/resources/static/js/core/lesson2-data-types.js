'use strict'


let message = 'Hello';
message = 12345;
message = 3.14;

let inf = 1/0;

alert( Infinity ); // Infinity

// символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let name = 'Jack';

let text = `Hello, ${name}`;

console.info(text);

let trueStatement = (3+2===5);

let isGreater = 4>5;

console.log(`4>5 = ${isGreater}`);
console.log(trueStatement);


let nullValue = null;

console.info(nullValue);

let age;

console.log(age);

/* typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)  */
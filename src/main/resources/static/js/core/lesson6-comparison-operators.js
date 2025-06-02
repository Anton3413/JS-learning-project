

console.log(" " == false);

console.log('A' > 'a');

console.log('5' == 5);

console.log( '5' === 5);

console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true

console.log( undefined > 0 ); // false
console.log( undefined < 0 ); // false
console.log( undefined == 0 ); // false
/*

5 > 4     || true
"ананас" > "яблоко" || false
"2" > "12"          || true
undefined == null   || true
undefined === null  || false
null == "\n0\n"     || false
null === +"\n0\n"   ||false
*/
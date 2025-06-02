let number = 4;
let string = String(4);

console.log(typeof number);
console.info(typeof string);

alert( Number("   123   ") ); // `123`
alert( Number("123z") );      // NaN
alert( Number(true) );        // 1
alert( Number(false) );       // 0

console.log(`true== ${Number(true)}`) ;//1
console.log(`false== ${Number(false)}`) ;// 0

console.log(Boolean(1));
console.log(Boolean(""));

console.log(Boolean(null));
console.log(Boolean(" "));
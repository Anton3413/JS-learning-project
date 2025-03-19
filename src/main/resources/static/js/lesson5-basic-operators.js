console.log(5/2); // != 2 , == 2.5
console.log(5.2/2); // 2.6
console.log(5*2); //10
console.log(5%2);  //1
console.log(5**2);  //25

console.log(2 + 4 + "19" ); // "619";

alert( 6 - '2' ); // 4
alert( '6' / '2' ); // 3

alert( +true ); // 1
alert( +"" );   // 0

let apples = '4';
let oranges = '5';

console.log(+apples + +oranges); //9


let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log( a ); // 3
console.log( c ); // 0

let counter1 = 2;
let counter2 = 2;

console.log(++counter1)
console.log(counter2++)


let strangeOpertator = (2 + 4, 5 + 5 );

console.log(strangeOpertator) // 10


/*"" + 1 + 0    || '10'
"" - 1 + 0    || -1
true + false  || 1
6 / "3"       || 2
"2" * "3"     || 6
4 + 5 + "px"  || '9px'
"$" + 4 + 5   || '$45'
"4" - 2       || 2
"4px" - 2     || nan
"  -9  " + 5  || "  -9  5"
"  -9  " - 5  || -14
null + 1      || 1
undefined + 1 || nan
" \t \n" - 2  || -2*/

console.log(Number(" "));
console.log(Number(" \t \n"));

let dd = prompt("Первое число?", 1);
let bb = prompt("Второе число?", 2);

alert(+dd + +bb);
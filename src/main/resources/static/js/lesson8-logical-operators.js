let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    console.log( 'Closed' );
}

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false


console.log( !true ); // false
console.log( !0 ); // true


let user;

console.log(user ?? "username");
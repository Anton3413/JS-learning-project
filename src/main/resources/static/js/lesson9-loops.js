let i = 3;

while (i) {
    console.log( i-- );
}

/*let j = 0;
while (++i < 5) alert( i ); // 1, 2, 3,4,

let l = 0;
while (i++ < 5) alert( i ); //  0 1 2 3 4*/

for(let x = 2; x !=10; x+=2){
    console.log(x);
}

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

let k = 0;
while(k<3){
    console.log(`number ${k}!`);
    k++;
}

while(true){
    if(prompt("Enter number  more then 100") >100){
        break;
    }
}
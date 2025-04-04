
let sayHi2 = function() {
    console.log( "Привет" );
};



function sum(val1, val2){
    return val1+val2;
}



function sayHi(){
    console.log( "Hi!");
}

let c = sayHi;


c();


function ask(question, yesFunc, noFunc){
    if(confirm(question)){
        yesFunc();
    }else noFunc();
}

ask("Yes or no?",
    function(){console.log("Confirmed")},
    function (){console.log("Canseled")}
);
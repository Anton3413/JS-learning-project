let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";

delete user.name;


function testFunction(name, age){
    return{
        name:name,
        age:age,
    };
}


console.log(testFunction("Anton", 24));

console.log("name" in user);
console.log("surname" in user);

user.city= "New York";
user.gender = "male";

for(let value in user){
    console.info(value);
}
function isObjectEmpty(object){
    for(let prop in object){
        return false;
    }
    return true;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for(let prop in salaries){
    sum = sum + salaries[prop];
}

console.log(sum);


function multiplyNumeric(obj){
    for(let prop in obj){
        if(typeof obj[prop] === "number")
            obj[prop] *=2;
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.info(menu);
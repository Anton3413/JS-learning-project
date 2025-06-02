let obj = {};
let object = new Object();
object.value = "value";
let a = "gender";

let objWithProp = {
    name: "Anton",
    age : 24,
    country : "germany",
};
objWithProp.city = "Dresden";

console.info(objWithProp.name);
console.info(objWithProp.city);

objWithProp[a] = "male";

console.log(objWithProp.gender);

console.log("city" in objWithProp);
delete objWithProp.city;

console.log("city" in objWithProp);

for(let val in objWithProp){
    console.log(val);
}
let age =  prompt('Your age ', "22");

if( age >= 0 && age <=10) {
    console.log("Baby");
}else if (age > 10 && age <18){
    console.log("baby++");
}else if(age == 18){
    console.log("Congratulations!! You can drink some Alco")
}else if (age > 18 && age<=40){
    console.log("So old");
}else if(age > 40 && age < 90 ){
    console.log("Do you remember Dinosaurs?")
}else console.log("Are you kidding me???")


let isAdult = age >= 18 ? 'adult': 'baby' ;


let userResponse = prompt("Какое “официальное” название языка Javascript ?");

if(userResponse === 'ECMAScript'){
    alert("Верно!");
}else alert("Не знаете? “ECMAScript”!")


let userNumber = prompt("enter the number");

if(userNumber > 0){
    alert(1);
}else if(userNumber < 0 ){
    alert(-1);
}else alert(0);
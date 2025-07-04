let user = {
    name: 'Anton',
    surname: 'Bondar',
    age: '25',
    city: 'Dresden',

    toString(){
        let result = '';
        for(let prop in user){
            if( typeof this[prop] !== 'function'){
                result += prop + ' : ' + this[prop];
            }
        }
        return result;
    },

    sayHi(){
        console.log('Hello ' + name + ' !' + user.toString());
    }
}



//user.sayHi(prompt("What is your name ?"));


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
};


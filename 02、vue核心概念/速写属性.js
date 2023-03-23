var name = "bob"
var age = 18

//原写法
var person = {
    name: name,
    age: age,
};
//ES6写法
var person2 = {
    name,
    age,
}


console.log(person2)
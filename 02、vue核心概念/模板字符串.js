var str = "bob";
var age = 18;

// 原方法
var str3 = "my name is " + str + "\nmy age is " + age;

// Es6新增方法

var str4 = 
`my name is ${str}
my age is ${age}
`


console.log(str4)
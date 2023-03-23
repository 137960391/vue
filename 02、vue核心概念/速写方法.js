
//原方法
var person={
    name:'bob',
    age:18,
    setName:function(){
        this.name = 'Alice';
    }
};

//ES6新增方法
var person={
    name:'bob',
    age:18,
    setName(){
        this.name = 'Alice';
    }
};


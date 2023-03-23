person = {name: 'Tom'};
//当对象发生改变时，触发set函数
Object.defineProperty(person, 'name', {
  set: function(newName) {
    console.log('set name:', newName);
    this._name = newName;
  }
});




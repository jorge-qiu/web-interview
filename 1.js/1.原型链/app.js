// function Person() {

// }

// var person = new Person()
// person.name = 'Kevin'
// // console.log(person.name)
// console.log(Person.prototype) 


// function Person() {

// }
// var person = new Person();
// console.log(person.__proto__ === Person.prototype); // true
// // __proto__ : 这是每一个JavaScript对象(除了 null )都具有的一个属性，这个属性会指向该对象的原型

//new 对象做的事情
/**
 * 创建一个空的实例对象，等待被初始化
 * 将空实例对象的原型，指向构造函数的原型
 * 将构造函数内部的 this，强制指向该实例对象，并执行构造函数，初始化实例对象
 * 最后返回该实例对象
*/


// 将构造函数以参数形式传入
function New(func) {

    // 声明一个中间对象，该对象为最终返回的实例
    const res = {};
    if (func.prototype !== null) {
  
      // 将实例的原型指向构造函数的原型
      res.__proto__ = func.prototype;
    }
  
    // ret为构造函数执行的结果，这里通过apply，将构造函数内部的this指向修改为指向res，即为实例对象
    const ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
  
    // 当我们在构造函数中明确指定了返回对象时，那么new的执行结果就是该返回对象
    if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
      return ret;
    }
  
    // 如果没有明确指定返回对象，则默认返回res，这个res就是实例对象
    return res;
  }


  
function createPerson(name, age) {
    this.name = name
    this.age = age
  }
  createPerson.prototype.run = function() {
    console.log(`调用此方法${this.name}就会开始奔跑`)
  }
  
  const p1 = New(createPerson, 'TOM', 20)
  const p2 = New(createPerson, 'Jake', 22)
  const p3 = New(createPerson, 'Amy', 21)
  
  p1.run()
  p2.run()
  p3.run()

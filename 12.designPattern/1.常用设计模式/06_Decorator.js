// function classDecorator(target) {
//     // target 被装饰的类本身
//     target.hasDecorator = true
//     return target
// }

// //将装饰器安装到button类上
// @classDecorator
// class Button {
//     //button 类相关逻辑
// }

// console.log('button 是否被装饰',Button.hasDecorator)
/**
 * 装饰器模式（Decorator Pattern）允许向一个现有的对象添加新的功能，同时又不改变其结构
 */

function fun1() {
    console.log('只打印fun1')
}

//装饰器 --可以在不改变fun1的功能前提下 我还要打印fun2
function decorator(fn) {
    return function () {
        console.log('不改变fun1的情况下打印了fun2')
        const result = fn.apply(this, arguments)
        return result
    }
}

const fun2 = decorator(fun1)
fun2()




// Object.defineProperty(obj, prop, descriptor)
//此处的descriptor和装饰器函数里的 descriptor 是一个东西，它是 JavaScript 提供的一个内部数据结构、一个对象，专门用来描述对象的属性
function funcDecorator(target, name, descriptor) {
    let originalMethod = descriptor.value
    descriptor.value = function() {
    console.log('我是Func的装饰器逻辑')
    return originalMethod.apply(this, arguments)
  }
  return descriptor
}
//原型模式
/**
 * 原型编程范式的核心思想就是利用实例来描述对象，用实例作为定义对象和继承的基础
 */

function deepClone(obj) {
    //如果是值类型 或者 null 则直接return
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    //定义结果对象
    let copy = {}
    //如果对象是数组，则定义结果数组
    if (obj.constructor === Array) {
        copy = []
    }

    //遍历对象的key
    for (let key in obj) {
        //如果key是对象的自有属性
        if (obj.hasOwnProperty(key)) {
            //递归调用深拷贝
            copy[key] = deepClone(obj[key])
        }
    }
    return copy

}
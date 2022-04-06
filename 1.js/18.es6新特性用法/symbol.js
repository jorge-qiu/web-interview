// const cache = {}

// // a.js
// cache['a_foo'] = Math.random()

// //b.js
// cache['b_foo'] = '123'

// console.log(cache)


// 为了解决这种key键值冲突
//独一无二的标识符 唯一
// const obj = {}

// obj[Symbol(123)] = '123'
// obj[Symbol(222)] = '456'
// console.log(obj)


// //对象私有成员
// const name = Symbol()
// const person = {
//     [name]:'zce',
//     say() {
//         console.log(this[name])
//     }
// }


//一定是个唯一的值

// console.log(
//     Symbol('FOO') == Symbol('FOO')
// )

//全局对象
// const s1 = Symbol.for('foo')
// const s2 = Symbol.for('foo')
// console.log(s1==s2)

const s1 = function () {
    return new Promise(async (resolve, reject) => {
        console.log("111")
        await s5()
        await s2().then(_ => {
            s3().then(_ => {
                s4().then(_ => {
                    resolve()
                })
            })
        })
    })
}


const s2 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            console.log("222")
            resolve()
        }, 1000)
    })
}
const s3 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            console.log("333")
            resolve()
        }, 1000)
    })
}
const s4 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            console.log("444")
            resolve()
        }, 1000)
    })
}

const s5 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            console.log("555")
            resolve()
        }, 1000)
    })
}


s1().then(_ => {
    console.log("最后一个")
})
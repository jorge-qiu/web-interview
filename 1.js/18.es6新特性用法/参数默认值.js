//多个参数 默认值 在最后

// function foo(enable = true) {
//     console.log('enable is ',enable);
// }

// foo()

// foo(false)

//剩余参数  ----    只能出现在形参的最后一位 只能使用一次 
// function foo(first,...args) {
//     console.log(args)
// }

// foo(12,3,4,5,6)
// foo(1,44,53)

//展开数组
const arr = [1,2,3]
//es5
// console.log.apply(console,arr)

console.log(...arr)

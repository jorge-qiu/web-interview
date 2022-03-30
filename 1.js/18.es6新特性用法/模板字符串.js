//1.能换行

// const str = `hello 
// world`

// console.log(str)

//带标签的模板字符串
//  const str = console.log`hello world`


// const name = 'tom'
// const gender = true

// function myTagFunc(str, name, gender) {
//     console.log(str,name,gender)
//     return str[0] + str[1] + gender + str[2]
// }
// const result = myTagFunc`hello,${name} is a ${gender}`

// console.log(result)


//扩展方法
//1.includes() --- 中间是否存在
//2.startsWith() --- 开头有什么
//3.endsWith()  --- 以什么结尾
const message = 'hello world'
console.log(message.startsWith('hell'))
console.log(message.endsWith('d'))
console.log(message.includes('w'))
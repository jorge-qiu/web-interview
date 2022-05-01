//buffer 静态方法

// let b1 = Buffer.from('老狗')
// let b2 = Buffer.from('小狗')

// let b = Buffer.concat([b1,b2])

// console.log(b)
// console.log(b.toString())


//isBuffer 是否是流
let b1 = Buffer.alloc(3)
console.log(Buffer.isBuffer(b1))
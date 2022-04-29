/**
 * fill 使用数据填充buffer 
 * write 向buffer中写入数据
 * toString 从buffer中提取数据
 * slice 截取buffer
 * indexof 在buffer 中查找数据
 * copy 拷贝buffer中的数据
*/

let buf = Buffer.alloc(6)

//fill 
/**
 * param1 填充元素
 * param2 下标开始位置
 * param3  结束位置  取不到
*/
// buf.fill('123',1,2)
// console.log(buf)
// console.log(buf.toString())


/**
 * param1 填充元素
 * param2 下标开始位置
 * param3  结束位置 取得程度
*/
// buf.write('123',1,4)
// console.log(buf)
// console.log(buf.toString())


//toString
/**
 * 汉字占3个字节
 */
//  buf = Buffer.from('拉钩教育')
//  console.log(buf)
//  console.log(buf.toString('utf-8',3))

//slice
// buf = Buffer.from('拉钩教育')
// let b1 = buf.slice(3)
// console.log(b1.toString())

//indexof  
// buf = Buffer.from('最厉害，最喜欢，最大的')
// console.log(buf)
// console.log(buf.indexOf('dsad',5))

//copy
let b1 = Buffer.alloc(6)
let b2 = Buffer.from('拉高')

b2.copy(b1)
console.log(b1.toString())
console.log(b2.toString())
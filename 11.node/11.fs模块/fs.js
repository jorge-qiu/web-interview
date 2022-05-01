/**
 * 常见的flag操作符
 * r: 表示可读性
 * w: 表示可写
 * s: 表示同步
 * +: 表示执行相反操作
 * x: 表示排它操作
 * a: 表示追加操作  
*/

/**
 * readFile:从指定文件中读取数据
 * writeFile:向指定文件中写入数据
 * appendFile:追加的方式向指定文件中写入数据
 * copyFile:将某个文件中的数据拷贝至另一个文件
 * watchFile:对指定文件进行监控
*/

const fs = require('fs')
const path = require('path')

//readfile
// fs.readFile(path.resolve('data.txt'),'utf-8',(err,data)=>{
//     console.log(err)
//     console.log(data)
// })


//writefile
// fs.writeFile('data.txt','123231',
// {
//     mode:438,
//     flag:'r+',
//     encoding:'utf-8'
// },
// (err)=>{
//     if(!err) {
//         fs.readFile('data.txt','utf-8',(error,data)=>{
//             console.log(data)
//         })
//     }
// })

//appendfile
// fs.appendFile('data.txt','大狗8989899',(err)=>{
//     console.log('写入成功')
// })

//copyfile
// fs.copyFile('data.txt','test.txt',(err)=>{
//     console.log('copy success')
// })

//watchfile
fs.watchFile('data.txt', { interval: 20 }, (cur, prev) => {
    console.log()
    if (cur.mtime !== prev.mtime) {
        console.log('file has changed!')
        fs.unwatchFile('data.txt')
    }
})


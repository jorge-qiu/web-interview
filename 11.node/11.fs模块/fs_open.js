//文件打开与关闭
const fs = require('fs')
const path = require('path')


//open  close 边打开 边读取
fs.open(path.resolve('data.txt'), 'r', (err, fd) => {
    console.log(fd, '打开成功')
    fs.close(fd, (err) => {
        console.log('close success')
    })
})



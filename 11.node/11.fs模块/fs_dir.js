const fs = require('fs')

// fs.access('b.txt', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("有操作权限")
//     }
// })

//stat

// fs.stat('data.txt', (err, statObj) => {
//     console.log(statObj.size)
//     console.log(statObj.isFile())
//     console.log(statObj.isDirectory())
// })

// fs.mkdir('a/b/c', { recursive: true }, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('创建成功')
//     }
// })


// fs.rmdir('a', { recursive: true }, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('删除成功')
//     }
// })

// fs.readdir('a', (err, files) => {
//     console.log(files)
// })


fs.unlink('a/1.txt', (err) => {
if(!err) {
    console.log('delete success')
}
})
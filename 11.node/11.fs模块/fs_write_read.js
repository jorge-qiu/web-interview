//大文件的读写

const fs = require('fs')

/**
 * read:所谓的读操作就是将数据从磁盘文件中写入到buffer中
 * 
 * fd <integer>
buffer <Buffer> | <TypedArray> | <DataView> 数据将写入的缓冲区。
offset <integer> 要写入数据的 buffer 中的位置。
length <integer> 读取的字节数。
position <integer> | <bigint> 指定从文件中开始读取的位置。 
如果 position 为 null 或 -1 ，则将从当前文件位置读取数据，并更新文件位置。 
如果 position 是整数，则文件位置将保持不变。
*/
let buf = Buffer.alloc(100)

// fs.open('data.txt', 'r', (err, fd) => {
//     console.log(fd)
//     fs.read(fd, buf, 1, 30, 0, (err, readBytes, data) => {
//         console.log(readBytes)
//         console.log(data.toString())
//     })
// })


//write 将缓冲区里的内容写入到磁盘文件中
/**
 * fd <integer>
buffer <Buffer> | <TypedArray> | <DataView> | <string> | <Object>
offset <integer>
length <integer>
position <integer>
callback <Function>
err <Error>
bytesWritten <integer>
buffer <Buffer> | <TypedArray> | <DataView>
*/
buf = Buffer.from('123123123123')
fs.open('b.txt', 'w', (err, fd) => {
    fs.write(fd, buf, 0, 3, 0, (err, weitten, buffer) => {
        console.log(weitten)
        console.log(buffer)
        console.log(buffer.toString())
        fs.close(fd)  
    })
})
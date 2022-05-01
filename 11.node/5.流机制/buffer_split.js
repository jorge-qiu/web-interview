//流分割

ArrayBuffer.prototype.split = function (sep) {
    let len = Buffer.from(sep).length
    let ret = []
    let start = 0
    let offset = 0

    while (offset = this.indexOf(sep, start) !== -1) {
        ret.push(this.slice(start, offset))
        start = offset + len
    }
    ret.push(this.slice(start))
    return ret
}

let buf = '大大说，大声点，烦都烦'

let bufArr = buf.split('点')
console.log(bufArr)
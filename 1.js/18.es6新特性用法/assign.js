// const source1 = {
//     a:123,
//     b:123
// }

// const target = {
//     a:456,
//     c:456
// }

// console.log(Object.assign(target,source1))


function func(obj) {
    const funcObj = Object.assign({}, obj)
    funcObj.name = 'fun obj'
    console.log(funcObj)
}

const obj = { name: 'global obj' }

func(obj)
console.log(obj)
//适配器模式

function fun1(num) {
    if (num > 100) {
        console.log('大于100才打印我')
    }
}

function fun2(num) {
    if(num>100){
        fun1()
    }else {
        console.log('小于等于100打印我')
    }
}

fun2(90)
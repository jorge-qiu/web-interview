// const inc = n => n +1


//箭头函数 不会改变this指向
const person = {
    name: 'tom',
    // sayHi:function() {
    //     console.log('hi',this.name)
    // }
    sayHi: () => { console.log('hi', this.name) },
    sayHiAsync: function () {
        // const _this = this
        // setTimeout(function () {
        //     console.log('setTimeout', _this.name)
        // }, 1000)
        setTimeout(() => {
            console.log('setTimeout', this.name)
        }, 1000)
    }
}

person.sayHiAsync()
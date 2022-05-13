//单例模式 


//不管我们尝试去创建多少次，它都只给你返回第一次所创建的那唯一的一个实例
// class singleDog {
//     show() {
//         console.log('单例对象么')
//     }
// }

// const s1 = new singleDog()
// const s2 = new singleDog()
// console.log(s1 == s2)  //false

class singleDog {
    show() {
        console.log('单例对象')
    }
    static getInstance() {
        //判断是否已经New过一个实例
        if (!singleDog.instance) {
            //不存在则创建
            singleDog.instance = new singleDog()
        }
        return singleDog.instance
    }
    //闭包版本
    // SingleDog.getInstance = (function() {
    //     // 定义自由变量instance，模拟私有变量
    //     let instance = null
    //     return function() {
    //         // 判断自由变量是否为null
    //         if(!instance) {
    //             // 如果为null则new出唯一实例
    //             instance = new SingleDog()
    //         }
    //         return instance
    //     }
    // })()
}

const s1 = singleDog.getInstance()
const s2 = singleDog.getInstance()
console.log(s1 == s2) //true


//vuex 确保store的唯一性

//1. Vue.use(Vuex)

//2. vuex插件内部的 install 方法
export function install (_Vue) {
    // 判断传入的Vue实例对象是否已经被install过Vuex插件（是否有了唯一的state）
    if (Vue && _Vue === Vue) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(
          '[vuex] already installed. Vue.use(Vuex) should be called only once.'
        )
      }
      return
    }
    // 若没有，则为这个Vue实例对象install一个唯一的Vuex
    Vue = _Vue
    // 将Vuex的初始化逻辑写进Vue的钩子函数里
    applyMixin(Vue)
  }
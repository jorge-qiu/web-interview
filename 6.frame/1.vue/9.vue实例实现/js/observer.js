class Observer {
    constructor(data) {
        this.walk(data);
    };
    walk(data) {

        console.log("walk");
        //1.判断data是否是对象
        if (!data || typeof data !== 'object') {
            return
        }
        //2.遍历data对象的所有属性
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
        })
    };

    //转换属性为get set
    defineReactive(obj, key, val) {
        let that = this;
        //收集依赖，并发送通知
        let dep = new Dep();
        // 如果val是对象，则将val内部属性也转换成响应式数据
        this.walk(val);
        console.log("defineReactive");
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() {
                Dep.target && dep.addSub(Dep.target)
                return val;
            },
            set(newValue) {
                if (newValue === val) {
                    return
                }
                val = newValue
                that.walk(newValue)
                //发送通知
                dep.notify();
            }
        });
    };
}
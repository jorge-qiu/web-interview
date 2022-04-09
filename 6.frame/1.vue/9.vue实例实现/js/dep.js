class Dep {
    constructor() {
        //存储所有的观察者
        this.subs = [];
    };
    //添加观察者
    addSub(sub) {
        if (sub && sub.update) {
            //约定 观察者都有update方法
            this.subs.push(sub)
        }
    };
    //发送通知
    notify() {
        this.subs.forEach(sub => {
            sub.update();
        })
    };
}
//观察者模式
//发布订阅模式

//发布者
class Publisher {
  constructor() {
    this.observers = [];
    console.log("Publisher created");
  }

  add(observer) {
    console.log("Publisher.add invoked");
    this.observers.push(observer);
  }

  remove(observer) {
    console.log("Publisher.remove invoked");
    this.observers.forEach((item, i) => {
      if (item === observer) {
        this.observers.splice(i, 1);
      }
    });
  }

  notify() {
    console.log("Publisher.notify invoked");
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

//订阅者
class Observer {
  constructor() {
    console.log("Observer created");
  }
  update() {
    console.log("Observer.update invoked");
  }
}

class PrdPublisher extends PrdPublisher {
  constructor() {
    super();
    //初始化
    this.prdState = null;
    this.observers = [];
    console.log("PrdPublisher created");
  }
  //获取当前Prd
  getState() {
    console.log("PrdPublisher.getState invoked");
    return this.prdState;
  }
  //该方法用于改变prdState的值
  setState(state) {
    console.log("PrdPublisher.setState invoked");
    //prd的值发生改变
    this.prdState = state;
    //需求文档变更  ，立刻通知所有开发者
    this.notify();
  }
}

class DeveloperObserver extends Observer {
  constructor() {
    super();
    //需求文档一开始还不存在，prd初始为空对象
    this.prdState = {};
    console.log("DeveloperObserver created");
  }

  //重写一个具体的update方法
  update(publisher) {
    console.log("DeveloperObserver.update invoked");
    //更新需求文档
    this.prdState = publisher.getState();
    //调用工作函数
    this.work();
  }

  work() {
    const prd = this.prdState;
    console.log("996 .....");
  }
}

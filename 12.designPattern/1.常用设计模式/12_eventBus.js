//event bus
class EventEmitter {
  constructor() {
    //handlers 是一个map，用于存储事件与回调之间的对应关系
    this.handlers = {};
  }

  //on 方法用于安装事件监听器，它接收目标事件名和回调函数作为参数
  on(eventName, cb) {
    //先检查一下目标事件名有没有对应的监听函数队列
    if (!this.handlers[eventName]) {
      //没有，那么初始化一个监听函数队列
      this.handlers[eventName] = [];
    }
    // 把回调函数推入目标事件的监听函数队列去
    this.handlers[eventName].push(cb);
  }

  //emit 方法用于出发目标事件，它接收事件名和监听函数入参作为参数
  emit(eventName, ...args) {
    //检查目标事件是否有监听函数队列
    if (this.handlers[eventName]) {
      //这里要对this.handlers[eventName]做一次浅拷贝，主要目的是为了避免通过once安装的监听器在移除的过程中出现顺序问题
      const handlers = this.handlers[eventName].slice();
      //如果有，则逐个调用队列里的回调函数
      handlers.forEach((cb) => {
        cb(...args);
      });
    }
  }

  //移除某个事件回调队列里面制定的回调函数
  off(eventName, cb) {
    const callbacks = this.handlers[eventName];
    const index = callbacks.indexof(cb);
    if (index !== -1) {
      callbacks.splice(index, 1);
    }
  }

  //为事件注册单词监听器
  once(eventName, cb) {
    //对回调函数进行包装，使其执行完毕自动被移除
    const warpper = (...args) => {
      cb(...args);
      this.off(eventName, warpper);
    };
    this.on(eventName, warpper);
  }
}

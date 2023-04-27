class myPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";

  constructor(func) {
    this.PromiseState = myPromise.PENDING;
    this.PromiseResult = null;
    // 此处的Bind 绑定了 调用的promise1 为实例对象

    this.onFulfilledCallbacks = []; //保存成功回调
    this.onRejectedCallbacks = []; //保存失败回调
    try {
      func(this.resolve.bind(this), this.reject.bind(this));
    } catch {
      //注意这里不需要给reject()方法进行this的绑定了，因为这里是直接执行，而不是创建实例后再执行
      /**
       * call、apply和bind都可以改变函数体内部 this 的指向，但是 bind 和 call/apply 有一个很重要的区别：一个函数被 call/apply 的时候，会立即执行函数，但是 bind 会创建一个新函数，不会立即执行
       */
      this.reject(error);
    }
  }
  resolve(result) {
    if (this.PromiseState === myPromise.PENDING) {
      this.PromiseState = myPromise.FULFILLED;
      this.PromiseResult = result;
      this.onFulfilledCallbacks.forEach((callback) => {
        callback(result);
      });
    }
  }
  reject(reason) {
    if (this.PromiseState === myPromise.REJECTED) {
      this.PromiseState = myPromise.REJECTED;
      this.PromiseResult = reason;
      this.onRejectedCallbacks.forEach((callback) => {
        callback(reason);
      });
    }
  }

  then(onFulfilled, onRejected) {
    /**
     * Promise 规范如果 onFulfilled 和 onRejected 不是函数，就忽略他们。所谓“忽略”并不是什么都不干，对于onFulfilled来说“忽略”就是将value原封不动的返回，对于onRejected来说就是返回reason，onRejected因为是错误分支，我们返回reason应该throw一个Error
     */

    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;

    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    // promsie的状态不可变
    //如果当前实例的 PromiseState 状态属性为 fulfilled 成功 的话，我们就执行传进来的 onFulfilled 函数，并且为onFulfilled函数传入前面保留的PromiseResult属性值
    //要确保 onFulfilled 和 onRejected 方法异步执行，且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行
    if (this.PromiseState === myPromise.PENDING) {
      this.onFulfilledCallbacks.push(() => {
        setTimeout(() => {
          onFulfilled(this.PromiseResult);
        });
      });
      this.onRejectedCallbacks.push(() => {
        setTimeout(() => {
          onRejected(this.PromiseResult);
        });
      });
    }

    if (this.PromiseResult === myPromise.FULFILLED) {
      setTimeout(() => {
        onFulfilled(this.PromiseResult);
      });
    }

    if (this.PromiseResult === myPromise.REJECTED) {
      setTimeout(() => {
        onRejected(this.PromiseResult);
      });
    }
  }
}

/******************************************************* */

//我们在new一个新实例的时候执行的是constructor里的内容，也就是constructor里的this确实是新实例的，但现在我们是在新实例被创建后再在外部环境下执行resolve()方法的，这里的resolve()看着像是和实例一起执行的，其实不然，也就相当于不在class内部使用这个this，而我们没有在外部定义任何PromiseState 变量，因此这里会报错

let promise1 = new myPromise((resolve, reject) => {
  resolve("这次对了吧");
});

// bad
promise.then(
  function (data) {
    // success
  },
  function (err) {
    // error
  }
);

// good
promise
  .then(function (data) {
    //cb
    // success
  })
  .catch(function (err) {
    // error
  });

// then 方法里面是有两个参数的，一个是resolve调用的，一个是reject调用的
//一般来说，不要在then()方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法

//第二种写法可以捕获前面then方法执行中的错误，也更接近同步的写法（try/catch）。因此，建议总是使用catch()方法，而不使用then()方法的第二个参数

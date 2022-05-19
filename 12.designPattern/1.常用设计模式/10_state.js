const stateToProcessor = {
    american() {
      console.log('我只吐黑咖啡');    
    },
    latte() {
      this.american();
      console.log('加点奶');  
    },
    vanillaLatte() {
      this.latte();
      console.log('再加香草糖浆');
    },
    mocha() {
      this.latte();
      console.log('再加巧克力');
    }
  }
  
  class CoffeeMaker {
    constructor() {
      /**
      这里略去咖啡机中与咖啡状态切换无关的一些初始化逻辑
    **/
      // 初始化状态，没有切换任何咖啡模式
      this.state = 'init';
    }
    
    // 关注咖啡机状态切换函数
    changeState(state) {
      // 记录当前状态
      this.state = state;
      // 若状态不存在，则返回
      if(!stateToProcessor[state]) {
        return ;
      }
      stateToProcessor[state]();
    }
  }
  
  const mk = new CoffeeMaker();
  mk.changeState('latte');
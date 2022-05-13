/**
 * 将创建对象的过程单独封装，这样的操作就是工厂模式
*/
//简单工厂模式
function User(name, age, career, work) {
    this.name = name
    this.age = age
    this.career = career
    this.work = work
}

function Factory(name, age, career) {
    let work
    switch (career) {
        case 'coder':
            work = ['写代码', '写系统']
            break;
        case 'product manager':
            work = ['写prd', '定会议室', '催命']
            break;
    }
    return new User(name, age, career, work)
}

//抽象工厂模式

//不需要对抽象工厂MobilePhoneFactory做任何修改
class OS {
    controlHardWare() {
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！')
    }
}
class AndroidOS extends OS {
    controlHardWare() {
        console.log('安卓系统')
    }
}

class AppleOS extends OS {
    controlHardWare() {
        console.log('ios系统')
    }
}

class HMOS extends OS {
    controlHardWare() {
        console.log('鸿蒙系统')
    }
}

class HardWare {
    operateByOrder() {
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！')
    }
}

class QualcommHardWare extends HardWare {
    operateByOrder() {
        console.log('高通芯片')
    }
}

class MiWare extends HardWare {
    operateByOrder() {
        console.log('小米澎湃芯片')
    }
}

class HuaWeiWare extends HardWare {
    operateByOrder() {
        console.log('华为麒麟芯片')
    }
}

//抽象工厂（不能被用于生成具体实例）
class MobilePhoneFactory {
    createOS() {
        throw new Error('重写系统')
    }
    createHardWare() {
        throw new Error('重写芯片')
    }
}

//继承抽象工厂---具体工厂
class HWMobilePhone extends MobilePhoneFactory {
    createOS() {
        return new HMOS()
    }
    createHardWare() {
        return new HuaWeiWare()
    }
}

//华为手机
const myPhone = new HWMobilePhone()

const myOS = myPhone.createOS()

const myHardWare = myPhone.createHardWare()

myOS.controlHardWare()

myHardWare.operateByOrder()
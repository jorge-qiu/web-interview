/**
 * 实现Storage，使得该对象为单例，
 * 基于 localStorage 进行封装。
 * 实现方法 setItem(key,value) 和 getItem(key)。
*/

class Storage {
    static getInstance() {
        if (!Storage.instance) {
            Storage.instance = new Storage()
        }
        return Storage.instance
    }

    getItem(key) {
        return localStorage.getItem(key)
    }
    setItem(key, value) {
        return localStorage.setItem(key, value)
    }

}



/**
 * 实现一个全局唯一的Modal弹框
 */

const Modal = (function () {
    let modal = null
    return function () {
        if (!modal) {
            modal = document.createElement('div')
            modal.innerHTML = '我是一全局唯一一个modal'
            modal.id = 'modal'
            modal.style.display = 'none'
        }
        return modal
    }
})()
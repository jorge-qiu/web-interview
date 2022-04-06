//可迭代接口 iterable
const obj = {
    [Symbol.iterator]:function() {
        return {
            next:function() {
                return {
                    value:'aa',
                    done:true
                }
            }
        }
    }
}
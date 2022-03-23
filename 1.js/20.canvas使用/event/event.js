export const move = 'mousemove'
export const click = 'mousedown'


// 新建一个画布类
export class Canvas {
    constructor() {
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.allShapes = []
    }

    add(shape) {
        shape.draw(this.ctx)
        this.allShapes.push(shape)
    }

    //给图形绑定事件
}

// 图形的基类
export class Shape {
    constructor() {
        this.listenerMap = new Map()
    }
    on(eventName, listener) {
        if (this.listenerMap.has(eventName)) {
            this.listenerMap.get(eventName).push(listener)
        } else {
            this.listenerMap.set(eventName, [listener])
        }
    }
}


export class Circle extends Shape {
    constructor(props) {
        super()
        this.props = props
    }

    draw(ctx) {
        const { center, radius, fillColor = 'black' } = this.props
        const { x, y } = center
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = fillColor
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
        ctx.restore()
    }

    // 判断鼠标的点是否在图形内部
    isPointInClosedRegion(mouse) {
    }
}

export class Rect extends Shape {
    constructor(props) {
        super()
        this.props = props
    }
    draw(ctx) {
        const { leftTop, width, height, fillColor = 'black' } = this.props
        const { x, y } = leftTop
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = fillColor
        ctx.fillRect(x, y, width, height)
        ctx.closePath()
        ctx.restore()
    }

    // 判断鼠标的点是否在图形内部
    isPointInClosedRegion(mouse) {
    }
}

//复杂图形
export class Polygon extends Shape {
    constructor(props) {
        super()
        this.props = props
    }

    draw(ctx) {
        const { points, fillColor = 'black' } = this.props
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = fillColor
        points.forEach((point, index) => {
            const { x, y } = point
            if (index === 0) {
                ctx.moveTo(x, y)
            } else {
                ctx.lineTo(x, y)
            }
        })
        ctx.fill()
        ctx.closePath()
        ctx.restore()

    }

    // 判断鼠标的点是否在图形内部
    isPointInClosedRegion(mouse) {
    }


}
function miniBase64(color) {
    var canvas = document.createElement('canvas')
    var ctx = canvas.getContext('2d')
    canvas.setAttribute('width', 10)
    canvas.setAttribute('height', 10)
    ctx.fillStyle = color || '#fff'
    ctx.fill()
    ctx.fillRect(0, 0, 10, 10)
    return canvas.toDataURL()
}

function computedCustomSize(width, height, url) {
    const img = new Image()
    img.setAttribute('crossOrigin', 'anonymous')
    img.src = url
    img.onload = (e) => {
        var canvas = document.createElement('canvas')
        var ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, width, height)
    }
}

miniBase64()
computedCustomSize(1000,1000,miniBase64())
//vue渲染两条线
//1. 初始化 patch(container,vnode)
//2. 更新 update(vnode,newVnode)


function createElement(vnode){
    let tag = vnode.tag  //目标元素
    let attrs = vnode.attrs || {} //属性
    let children = vnode.children || [] //子节点

    if(!tag){
        return null
    }
    let elem = document.createElement(tag)
    let attrName 
    for (attrName in attrs) {
        if(attrs.hasOwnProperty(attrName)) {
            elem.setAttribute(attrName,attrs[attrName])
        }        
    }
    //3. 将子元素添加到目标值上
    children.forEach(function(childrenVnode){
        elem.appendChild(createElement())
    })

    return elem
}


function updateChildren(vnode,newVnode) {
    let children = vnode.children || []
    let newChildren = newVnode.children || []
    children.forEach(function(childrenVnode,index){
        //循环每一项
        let newChildrenVnode = newChildren[index]
        if(childrenVnode.tag === newChildrenVnode.tag) {
            updateChildren(childrenVnode,newChildrenVnode)
        }else {
            //第一层变化
            replaceNode(childrenVnode,newChildrenVnode)
        }
    })
}
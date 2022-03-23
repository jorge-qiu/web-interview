//所有遍历函数的入参都是树的根结点对象
// 先序遍历
function preorder(root) {
    if (!root) return

    console.log(root.val)
    //递归左子树
    preorder(root.left)
    //递归右子树
    preorder(root.right)
}

//中序遍历
function preorder_mid(root) {
    if(!root) return

    //递归左子树
    preorder_mid(root.left)
    console.log(root.val)
    preorder_mid(root.right)

}


//后序遍历
function preorder_after(root) {
    if(!root) return

    //递归左子树
    preorder_after(root.left)
    preorder_after(root.right)
    console.log(root.val)

}
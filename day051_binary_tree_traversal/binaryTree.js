// Node class
class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}



/* Given a binary tree, print its nodes in postorder */

function printPostorder(node) {
    if (node == null)
        return;

    // first recur on left subtree
    printPostorder(node.left);

    // then recur on right subtree
    printPostorder(node.right);

    // now deal with the node
    console.log(node.key + " ");
}

/* Given a binary tree, print its nodes in inorder */
function printInorder(node) {
    if (node == null)
        return;

    /* first recur on left child */
    printInorder(node.left);

    /* then print the data of node */
    console.log(node.key + " ");

    /* now recur on right child */
    printInorder(node.right);
}

/* Given a binary tree, print its nodes in preorder */
function printPreorder(node) {
    if (node == null)
        return;

    /* first print data of node */
    console.log(node.key + " ");

    /* then recur on left subtree */
    printPreorder(node.left);

    /* now recur on right subtree */
    printPreorder(node.right);

}



// Driver method


let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);


console.log("Preorder traversal of binary tree is <br/>");
printPreorder(root);

console.log("Postorder traversal of binary tree is <br/>");
printPostorder(root);

console.log("Inorder traversal of binary tree is <br/>");
printInorder(root);

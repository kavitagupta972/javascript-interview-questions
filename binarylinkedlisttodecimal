 // Javascript Program to find decimal value of 
 // binary linked list     
 // Link list Node 

class Node {

    constructor(){
        this.data = true;
        this.next = null;
    }
}

function createNode(data) {
    var node = new Node();
    node.data = (data == 1 ? true : false);
    node.next = null;
    return node;
}



var linkedList = createNode(1);
linkedList.next = createNode(1);
linkedList.next.next = createNode(1);
linkedList.next.next.next = createNode(1);

function convertToDecimal(head) {
    var result = 0;
    if(head == 0) return 0;
    while(head != null) {
        result = (result * 2) + head.data;
        head = head.next;
    }
    return result;
    
}

console.log(convertToDecimal(linkedList));

//stack is a data type which follows LIFO
//common methods of a stack are peek push and pop 
//here stack is implemented using a linked list

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(value){
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  peek(){
    return this.head;
  }

  push(value){
    const newNode = new Node(value);
    if(this.head != null){
      this.head.next = newNode;
      this.head = newNode;
      this.length++;
    }else{
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }

  pop(){
    if(this.head == null){
      return undefined;
    }else{
      if(this.length==1){
        const currHead = this.head;
        this.head = null;
        this.tail = null;
        this.length--;
        return currHead;
      }
      const headminusOne = this._traverse(this.length-2);
      const currHead = this.head;
      headminusOne.next = null;
      this.head = headminusOne;
      this.length--;
      return currHead;
    }
  }

  _traverse(index){
    let currNode = this.tail, i = 0;
    if(index == 0){
      return currNode;
    }
    while(currNode.next!=null){
      if(index == i){
        return currNode;
      }
      currNode = currNode.next;
      i++;
    }
  }
}

const myStack = new Stack('a');
myStack.push('b');
myStack.push('c');
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
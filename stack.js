class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(value){
    const node = new Node(value);
    this.top = node;
    this.length = 1;
  }

  peek(){
    return this.top.value;
  }

  push(value){
    const newNode = new Node(value);
    if( this.top == null || this.top == undefined ){
      this.top = newNode;
      this.length = 1;
    }else{
      const temp = this.top;
      this.top = newNode;
      newNode.next = temp;
      this.length++;
    }
    return this;
  }

  pop(){
    if(this.length == 1){
      //console.log('length one');
      const currNode = this.top;
      this.top = null;
      this.length--;
      //console.log(currNode);
      return currNode.value;
    }else{
      const currNode = this.top;
      this.top = this.top.next;
      this.length--;
      return currNode.value;
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
myStack.push('d')
console.log(myStack.peek());
console.log(myStack.pop());
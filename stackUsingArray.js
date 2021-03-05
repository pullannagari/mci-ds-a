class Stack{
  
  constructor(value){
    this.array = new Array();
    this.array.push(value);
    return this.array;
  }

  peek = function(){
    return this.array[this.array.length-1];
  }

  push(value){
    return this.array.push(value);
  }

  pop(value){
    return this.array.pop(value);
  }

}

const myArrStack = new Stack('a');
myArrStack.push('b');
myArrStack.push('c');
console.log(myArrStack.peek());
console.log(myArrStack.pop());
console.log(myArrStack.peek());
console.log(myArrStack.pop());
console.log(myArrStack.peek());
console.log(myArrStack.pop());
myArrStack.push('d');
console.log(myArrStack.peek());
console.log(myArrStack.pop());
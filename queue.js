class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue{

  constructor(value){
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.next = null;
    this.length = 1;
  }

  peek(){
    return this.first;
  }

  enqueue(value){
    const newNode = new Node(value);
    if(this.last == null || this.last == undefined){
      this.first = newNode;
      this.last = newNode;
      this.next = null;
    }else{
      const temp = this.last;
      this.last = newNode;
      temp.next = newNode;
    }
    this.length++;
    return this.last.value;
  }

  dequeue(){
    if(this.length == 1){
      const temp = this.first;
      this.last = null;
      this.first = null;
      this.length--;
      return temp.value;
    }else{
      const temp = this.first;
      this.first = this.first.next;
      this.length--;
      console.log(this);
      return this.first.value;
    }
  }

}

const myQueue = new Queue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
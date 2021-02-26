//implementation of linked list in js where it is not a built in function 100 --> 200 --->300
class DoubleLinkedList{
  constructor(value){
    this.head = {
      value : value,
      next : null,
      previous : null
    }
     this.tail = this.head;
     this.length = 1;
  }

  append(value){
    const newNode = {
      value : value,
      next : null,
      previous : this.tail
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value){
    const newNode = {
      value : value,
      next : this.head,
      previous : null
    };
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value){
    let i = 0;
    if(index == 0){
      this.prepend(value);
    }else if(index > this.length-1){
      this.append(value);
    }else{
      //traverse to the node where index is index-1
      let prevIndexNode = this.traverseToIndex(index-1);
      const newNode = {
            value : value,
            next : prevIndexNode.next,
            previous : prevIndexNode
          };
      prevIndexNode.next = newNode;
      this.length++; 
    }
    return this;
  }

  remove(index){
    let i = 0;
    if(index == 0){
      this.head = this.head.next;
      this.previous = null;
      this.length--;
      return this;
    }else if(index >= this.length){
      //console.log('cannot delete');
      return undefined;
     }else{
      //traverse to the node where index is index-1
      //console.log(' delete');
      let prevNode = this.traverseToIndex(index-1);
      let indexNode = prevNode.next;
      let nextNode = indexNode.next;
      //console.log(indexNode);
      //console.log(prevNode)
      prevNode.next = indexNode.next;
      if(nextNode!=null){
        nextNode.previous = prevNode;
      }
      this.length--;
    } 
    return this;
  }

  traverseToIndex(index){
    let node = this.head, i=0;
    if(index <= (this.length-1)){
      while(i <= index){
        if(i < (index)){
          node = node.next;
        }else if(i==(index)){
          return node;
        }
        i++;
      }
      return node;
    }
  }

  traverseAll(){
    let obj = this.head;
    let values = [];
    while(true){
      values.push(obj.value);
      if(obj.next == null){
        break;
      }else{
        obj = obj.next;
      }
    }
    return values;
  }
}

const myLinkedList = new DoubleLinkedList(100);
myLinkedList.append(200);
myLinkedList.append(300);
myLinkedList.prepend(50);
myLinkedList.prepend(25);
myLinkedList.insert(4,222);
myLinkedList.insert(3,222);
myLinkedList.insert(6,333);
console.log(myLinkedList.traverseAll());
myLinkedList.remove(6);
myLinkedList.remove(3);
myLinkedList.remove(4);
console.log(myLinkedList.traverseAll());
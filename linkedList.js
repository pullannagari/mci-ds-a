//implementation of linked list in js where it is not a built in function 100 --> 200 --->300
class LinkedList{
  constructor(value){
    this.head = {
      value : value,
      next : null
    }
     this.tail = this.head;
     this.length = 1;
  }

  append(value){
    const newNode = {
      value : value,
      next : null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value){
    const newNode = {
      value : value,
      next : this.head
    };
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value){
    let i = 0;
    if(index == 0){
      this.prepend(value);
    }else if(index >= this.length){
      this.append(value);
    }else{
      //traverse to the node where index is index-1
      let prevIndexNode = this.traverseToIndex(index-1);
      const newNode = {
            value : value,
            next : prevIndexNode.next
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
      //console.log(indexNode);
      //console.log(prevNode)
      prevNode.next = indexNode.next;
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

  traverseAll(llist){
    let obj = llist.head;
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

//reverse returning a existing LL
  reverseSame(){
    if(this.length==1){
      return this.head;
    }
    let first = this.head;
    let second = this.head.next;
    while(second){
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }

//reverse returning a new LL
  reverse(){
    let revList = new LinkedList(this.head.value);
    let currNode = this.head, i = 1;
    while(true){
      if(i != 1){
        revList.prepend(currNode.value);
      }
      if(currNode.next==null){
        break;
      }else{
        currNode = currNode.next;
        i++;
      }
    }
    return revList;
  }
}

const myLinkedList = new LinkedList(100);
myLinkedList.append(200);
myLinkedList.append(300);
myLinkedList.append(400);
console.log(myLinkedList.traverseAll(myLinkedList));
//console.log(myLinkedList.traverseAll(myLinkedList.reverse()));
console.log(myLinkedList.traverseAll(myLinkedList.reverseSame()));
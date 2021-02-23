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
    let newNode = {
      value : value,
      next : null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
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

const myLinkedList = new LinkedList(100);
myLinkedList.append(200);
myLinkedList.append(300);
console.log(myLinkedList.traverseAll());
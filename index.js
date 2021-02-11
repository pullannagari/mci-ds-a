//Array Implementation
class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }

  //O(1)
  get(index){
    return this.data[index]
  }

  //O(1)
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  //O(1)
  pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  //O(n)
  delete(index){
    const iteam = this.data[index];
    this.shiftItems(index);
  }

  //O(n)
  shiftItems(index){
    for(let i=index; i < this.length-1 ; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--
  }

}

//test
const newArray = new MyArray();
newArray.push('hi');
newArray.push('hello');
console.log(newArray);
newArray.pop();
console.log(newArray)
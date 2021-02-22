class HashTable {

  constructor(length){
    this.data = new Array(length)
  }

  set(key, value){
    let index = this._hash(key);
    if(!this.data[index]){
      this.data[index] = [];
    }
    this.data[index].push([key, value]);
    return this.data
  }

//O(1) usually, minus the rare collisions in real life
  get(key){
    let index = this._hash(key);
    let currentBucket = this.data[index];
    if(currentBucket.length>0){
      for( let i=0; i < currentBucket.length; i++){
        console.log(currentBucket[i]);
        if(currentBucket[i][0] === key){
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys(){
    const keysArray = [];
    for(let i = 0 ; i < this.data.length ; i++){
      if(this.data[i]){
        for(let j = 0 ; j < this.data[i].length ; j++){
          if(this.data[i][j]){
            keysArray.push(this.data[i][j][0]);
          }
        }
      }
    }
    return keysArray; 
  }

  //hash function to determine the indexes
  _hash(key){
    let hash = 0;
    for(let i=0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

}

const myHash = new HashTable(10);
myHash.set('mango',10000);
myHash.set('apple',10000);
myHash.set('banana',10000);
myHash.set('pineapple',10000);
//myHash.set('mango',10000);
//myHash.set('mango',10000);
//console.log(myHash.get('mango'));
console.log(myHash.keys());
//values() would also be O(n*m) - where m is the number of elements with same key/collission
//console.log(myHash._hash('apple')); private function shouldn't be accessed from outside the class
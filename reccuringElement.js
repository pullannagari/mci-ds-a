//Given an array
//[2,1,2,3,4,5,4,6,2,2]
//it should return 2, first recurring element/object
//unsorted array
//could contain negative values?
function findFirstRecurring(arr){
  var arrMap = new Map();
  for(let i=0; i < arr.length; i++){
    //console.log(arrMap.get(arr[i]));
    if(arrMap.get(arr[i])){
      return arr[i];
    }else{
      arrMap.set(arr[i],true);
    }
  }
  return undefined;
}

function findFirstRecurringUsingArray(arr1){
  let traversed = [arr1[0]];
  let i = 0, len = arr1.length;
  while(i < len){
    console.log(len);
    for(let j=0; j < traversed.length; j++){
      if(arr1[i] == traversed[j]){
        return arr1[i]; 
      } else {
        traversed.push(arr1[i])
      }
    }
    i++;
  }
  return undefined;
}

//console.log(findFirstRecurring([2,1,6,6,2,3,4,5,4,6,2,2]));
const arr = [2,1,6,6,0,1,6,2,3,4,5,4,6,2,2];
console.log(findFirstRecurringUsingArray(arr));
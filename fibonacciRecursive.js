//given an index find the fibonacci number at that index
//0 1 1 2 3 5 8 13 21....
function findFibonacci(index){
  if(index < 2){
    return index;
  }
  return findFibonacci(index-1)+findFibonacci(index-2);
}

function finbFiboIterative(index){
  if(index < 2){
    return index;
  }
  let indexMinusOne = 1;
  let indexMinustwo = 1;
  for(let i = 2; i <index ; i++){
    let temp = indexMinustwo;
    indexMinustwo  = indexMinusOne;
    indexMinusOne = temp + indexMinusOne;
  }
  return indexMinusOne;
}

console.log(findFibonacci(7));
console.log(finbFiboIterative(7));

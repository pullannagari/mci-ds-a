//factorial factorial using recursion

function findRecursiveFactorial(number){
  if(number == 0){
    return 1;
  }
  return number*findRecursiveFactorial(number-1);
}

console.log(findRecursiveFactorial(5));
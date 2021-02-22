// given two sorted arrays [] [], merge them into a single sorted arrray
//Questions
//can any of the arrays be empty?
//negative values in the array?
//length of the array
//memory for storing these arrays, and additional if required
//time vs space complexity

function mergeSortArray(){
  const arr1 = [0,3,4, 30, 31, 33, 36]
  const arr2 = [4,6,10, 12,13, 40, 41, 43, 44]

  let finalArray = []
  let p = 0; q = 0;

  for(let i = 0; i<(arr1.length+arr2.length);i++){
    if(p <= arr1.length || q <= arr2.length){
      if( arr1[p] < arr2[q] || arr2[q] == undefined ){
        console.log(`inside p ${p}`);
        finalArray.push(arr1[p]);
        p++;
      }else {
        console.log(`inside q ${q}`);
        finalArray.push(arr2[q]);
        q++;
      }
    }
  }
  return finalArray;
}

console.log(mergeSortArray());
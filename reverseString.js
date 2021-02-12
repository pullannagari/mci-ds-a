//reverse a string
let input = "Hi My Name Is Sudhir";

function stringReverse(input){
  console.log("inside str rev");
  let op = [];
  let count = 0;
  for(let i=(input.length)-1; i>=0 ;i--){
    op[count++] = input[i];
    //or op.join(input[i]);
  }
  //console.log(op);
  return op.join('');
}

console.log(stringReverse(input));

const modernReverse = (ip2) => [...ip2].reverse().join('');
console.log(modernReverse(input));

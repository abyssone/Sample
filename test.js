arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ReverseArrayInPlace(arr);
console.log(arr);


function ReverseArray(arr){
  arr2 = [];
  for(let i = 0; i < arr.length; i++){
    arr2.push(arr[arr.length - 1 - i]);
  }
  return arr2;
}

function ReverseArrayInPlace(arr){
  let count = arr.length-1;
  for(let i = 0; i < count; i++){
    arr.push(arr[arr.length - (i+1)*2]);
  }
  for(let i = 0; i < count; i++) arr.shift();
}

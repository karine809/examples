const {log} = console;
function toEndNumber (arr,num){
  let count = 0;
  for (let i=0; i<arr.length; i++) {
      if(arr[i] === num) {
       arr.splice(i,1);
       i--;
       count++; 
      }
  } 
  for(let i=0; i<count; i++){
    arr.push(num);
  }
  return arr;
}
log(toEndNumber([1, 2, 3, 1, 4], 1))
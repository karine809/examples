
function countNumbers(arr, num){
    let count = 0; 
    let noRepeatChracter = []
    let newStr1 = arr.join('');
    let newStr2 = num.toString();
    noRepeatChracter= [...new Set(newStr2)];
    //console.log(noRepeatChracter)
      for (let i=0; i<newStr1.length; i++){
          for (let j=0; j<noRepeatChracter.length; j++){
            if(newStr1[i]==noRepeatChracter[j] ){
                count+=1;
              }
          }
      }
      return count;
  }
  let result= countNumbers([1,2,21,111], 121)
  console.log(result);
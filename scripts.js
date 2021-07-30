let arrAll = [];
let arrZuyg = [];
let arrKent = [];
let descending  = 0;
let ascending = 0;
function sortOddEven(arr){
    for(let i=0; i<arr.length; i++){
      if(arr[i]%2 ==0){
          arrZuyg.push(arr[i])
          for(let j=0; j<arrZuyg.length; j++){
            for(let k=0; k<arrZuyg.length; k++){
              if(arrZuyg[j]<arrZuyg[k]){
                ascending = arrZuyg[k];
                arrZuyg[k]= arrZuyg[j];
                arrZuyg[j]= ascending;
              }
            }  
          }
      } else {
        arrKent.push(arr[i]);
        for(let j=0; j<arrKent.length; j++){
            for(let k=0; k<arrKent.length; k++){
              if(arrKent[j]>arrKent[k]){
                descending  = arrKent[k];
                arrKent[k]= arrKent[j];
                arrKent[j]= descending ; 
              }
            }  
          }
      }     
    }
  
   return arrAll.concat(arrZuyg, arrKent);  
}
let result = sortOddEven([11, 38, 75, 4, 3, 44, 17, 16]);
console.log(result);
//---------------------------------------------------
// let arrAll = [];
// let arrZuyg = [];
// let arrKent = [];
// let descending  = 0;
// let ascending = 0;
// function sortOddEven(arr){
//     for(let i=0; i<arr.length; i++){
//       if(arr[i]%2 ==0){
//         arrZuyg.push(arr[i])
//         ascending = arrZuyg.sort((a, b) => a - b)
//       } else {
//         arrKent.push(arr[i]);
//         descending  = arrKent.sort((a, b) => b - a)
//       }     
//     }
//    return arrAll.concat(ascending, descending );  
// }
// let result = sortOddEven([11, 38, 75, 4, 3, 44, 17, 16]);
// console.log(result);
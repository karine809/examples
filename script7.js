
function isPrime(m){
    for (let n=2; n<=Math.sqrt(m); n++){
      if(m % n === 0){
        return false
      } 
    }
    return true;
}

  function solution(length){
    let arr = [];
    let arrPrime = [];
    arr.length = length;
    for(let i=0; i<length; i++){
      arr[i] = Math.round(Math.random() * 1000);
      // arr[i] = Math.floor(Math.random() * (1000 - 100 + 1) + 100);
      console.log(arr[i]);
          for(var j=2; j<=arr[i]; j++){ 
            if(arr[i] % j == 0){      
              if (isPrime(j)){
                 arrPrime.push(j); 
              } 
            }     
          }  
      } 
     return  arrPrime;
  }
  console.log(solution(5));
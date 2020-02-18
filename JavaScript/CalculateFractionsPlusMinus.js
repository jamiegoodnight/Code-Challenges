function plusMinus(arr) {
    arrayLength=arr.length
    plus=[];
    minus=[];
    zero=[];
  
    for (let i=0; i<arrayLength; i++){
      if(arr[i]===0){
        zero.push(arr[i])
      } else if (Math.sign(arr[i])===-1){
        minus.push(arr[i])
      } else {
        plus.push(arr[i])
      }
    }
    return [(plus.length / arrayLength ), (minus.length / arrayLength ), (zero.length / arrayLength )]
  }
  
  plusMinus([-4, 3, -9, 0, 4, 1])
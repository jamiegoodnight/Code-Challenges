
function simpleArraySum(ar) {
   let sum=ar.reduce((acc, cur) => {
       return acc + cur 
   }, 0)
   return sum
}
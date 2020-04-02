let quarter=0
let penny=0
let nickel=0
let dime=0

function recursive(totalDifference){
    console.log(totalDifference)
    if(totalDifference-25 >= 0){
      console.log("Hiii")
      quarter++
      console.log(quarter)
      totalDifference=totalDifference-25
      return recursive(totalDifference)
    }
    else if(totalDifference-10 >= 0){
      dime++
      totalDifference=totalDifference-10
      return recursive(totalDifference)
    }
    else if(totalDifference-5 >= 0){
      nickel++
      totalDifference=totalDifference-5
      return recursive(totalDifference)
    }
    else if(totalDifference-1 >= 0){
      penny++
      totalDifference=totalDifference-1
      return recursive(totalDifference)
    }
    else {
      return [penny, nickel, dime, quarter]
    }
}

function ChangeMaker(price, payment) {
  const newArr=payment.map(x => x * 100)
  const newPrice=price*100
  console.log(newArr)
  const totalPay=newArr.reduce((a, b)=>{
  return a + b;
}, 0)
  const totalDifference=totalPay-newPrice
  console.log(totalDifference, "Hi")
  return recursive(totalDifference)
}

ChangeMaker(0.5, [0.25, 0.25, 0.25])


alice=[1,2,3]
bob=[3,2,1]

function compareTriplets(a, b) {
  // one=0
  // two=0
  o=0
  t=0
  for (let i=0; i<3; i++){
    if(a[i] > b[i]){
      o++
    }
    else if(a[i] < b[i]) {
      t++
    }
  }
  return [o,t]
}

compareTriplets(alice, bob)
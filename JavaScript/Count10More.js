const count = (start) => {
  const phrase=[]
  for(let i=start+1; i<start+11; i++){
    if (i===start+10){
      phrase.push(`${i}`)
    } else {
    phrase.push(`${i} then `)
    }
  }
  const newPhrase=phrase.toString().replace(/,/g, '')
  return newPhrase
}

// Count takes in a number and returns that number plus 10 in a
// series beginning with that number followed by "then", e.g, 1 then 2
// then 3 then 4 then 5 then 6 then 7 then 8 then 9 then 10"
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


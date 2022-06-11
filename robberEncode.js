function robberEncode(sentence) {
  let robberSentence = ""

  const consonants = "BCDFGHJKLMNPQRSTVWXYZ".toLowerCase()
  
  for (letter of sentence){
    if(consonants.includes(letter.toLowerCase())){

      robberSentence += letter + (letter == letter.toLowerCase() ?"o":"O")+letter
    
    }else{
      robberSentence += letter
    }
  }
  return robberSentence
  // yoyouror cocodode hoherore
}

console.log(robberEncode("S.O.S"))
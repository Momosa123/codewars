function incrementString (strng) {
  // return incrementedString
  let newStrng =''
  let numbersOfStrng = ""
  let i = strng.length-1
    while (["0","1","2","3","4","5","6","7","8","9"].includes(strng[i])){
        numbersOfStrng = strng[i] + numbersOfStrng
        i--
    }
   
    if(numbersOfStrng[numbersOfStrng.length-1]=="0"){
      return strng.slice(0,strng.length-1).concat("1")
    }

    for (element of strng){
      if( ! [,"1","2","3","4","5","6","7","8","9"].includes(element) ){
        newStrng+=element
      }
    }
    console.log(newStrng)
    return numbersOfStrng == "" ? strng.concat("1") : 
    newStrng.concat(+numbersOfStrng +1)
  
}

console.log(incrementString("foobar09"))
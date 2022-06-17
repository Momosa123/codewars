function rgb(r,g,b){
  //test if one parameter is negative or too high
  function converter (a){
    if(a <= 0)
    return '0'
    else if(a > 255)
    return 'F'
    return a.toString(16)
  }
  if (r < 0 || g < 0 || b <0){

  }
   //double the single elements
  function doubler(a){
    if(a.length < 2 && ['A','B','C','D','E','F'].includes(a))
    return a+a
    else if (a.length < 2)
    return '0' + a
    return a
  }
 

 return(doubler(converter(r)) + doubler(converter(g)) + doubler(converter(b))).toUpperCase()
}

let myNumber = 47;

console.log(myNumber.toString(16))

console.log(rgb(173,255,47))
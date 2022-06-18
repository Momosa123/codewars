function rgbe(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

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
    
    if (a.length < 2)
    return '0' + a
    return a
  }
 

 return(doubler(converter(r)) + doubler(converter(g)) + doubler(converter(b))).toUpperCase()
}


let myNumber = 10;

console.log(myNumber.toString(16))

console.log(rgb(173,255,10))
console.log(rgbe(173,255,10))
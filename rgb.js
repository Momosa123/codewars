function rgb(r,g,b){
  function converter (a){
    if(a <= 0)
    return 0
    else if(a > 255)
    return 255
        return a
  }
  if (r < 0 || g < 0 || b <0){

  }
  let rHex = converter(r).toString(16)
  let gHex = converter(g).toString(16)
  let bHex = converter(b).toString(16)
  function doubler(a){
    if(a.length < 2 && ['A','B','C','D','E','F'].includes(a))
    return a+a
    else if (a.length < 2)
    return '0' + a
    return a
  }
 

 return(doubler(rHex) + doubler(gHex) + doubler(bHex)).toUpperCase()
}

let myNumber = 47;

console.log(myNumber.toString(16))

console.log(rgb(173,255,47))
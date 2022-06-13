String.prototype.camelCase=function(){
  //your code here
  let camelString = ''
  const arr = this.split(' ')
  for(word of arr){
    camelString += word.charAt(0).toUpperCase() + word.slice(1)
  }

  return camelString
}

console.log("testcase".camelCase())
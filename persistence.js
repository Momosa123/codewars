function persistence(num) {
  //code me
  let newNum =  num.toString()
  let i = 0
  while(newNum.length !=1){
    newNum = newNum.split('').reduce((acc,curr) => acc*curr,1).toString();
    i++
   }

  return i
}

console.log(persistence(999))
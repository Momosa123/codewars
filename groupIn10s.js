function groupIn10s(...numbers) {
//Si un élément du tableau < n*10 le mettre dans le tableau à l'indice n-1
const newArr =[]
const multiple10 = Math.floor(Math.max(...numbers)/10) +1

// console.log(multiple10)
// for(let i = 1; i <= multiple10; i++){
//   let arrJ=[]
//   // console.log(i,arrJ)

//   for(let j = 0; j < numbers.length; j++){
//     if(numbers[j] < i*10 && numbers[j]>=(i-1)*10){
//       arrJ.push(numbers[j])
//     }
//   }
  
//   arrJ.sort((a,b)=> a-b)
//   if (arrJ.length == 0)
//   arrJ = undefined
//   newArr.push(arrJ)
// }

for(let i = 1; i <= multiple10; i++){
  const arrI = numbers.filter(num => num >= 10*(i-1) && num < 10*i).sort()
  if (arrI.length == 0)
  newArr.push(undefined)
  else{
    newArr.push(arrI)
  }
}
  return newArr
}


console.log(groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50));
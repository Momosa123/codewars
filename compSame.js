function comp(array1, array2){
  // return array1 === null || array2 === null ? false :  array2.every((element,i) => {
  //   console.log(array1.slice(i))
    
  //   return array1.slice(i).includes(Math.sqrt(element))})
  //your code 
 

  const arr1 = array1
  const arr2 = array2
  console.log(arr1)
  return arr1.sort((a,b) => a-b).map(el => el*el).join('') === arr2.sort((a,b) => a-b).join('')

}
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]))
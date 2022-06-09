function narcissistic(value) {
  const arrStringValue = value.toString().split('')
  
  return arrStringValue.reduce(
    (acc,curr) =>
    acc + curr**arrStringValue.length,0
    ) == value ? true : false
 
}

console.log(narcissistic(7))
function moveZeros(arr) {
  const withoutZeroArr =arr.filter(item =>item !== 0)
  const withZeroArr =arr.filter(item => item === 0)

  return withoutZeroArr.concat(withZeroArr)
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1, false, {}, []]))
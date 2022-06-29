function sumIntervals(intervals){
  let intervalSorted = intervals.sort(([a,b], [c,d]) => a-c);
  
  let res = 0
  let m = -Number.MAX_VALUE
  for ([a,b] of intervalSorted){
    m = Math.max(m, a)
    res += Math.max(0, b-m)
    m= Math.max(a,b)
  }

  return res;
}

console.log(sumIntervals( [
  [1,5],
  [10, 20],
  [1, 6],
  [16, 19],
  [5, 11]
] ));


  // intervals.forEach(int => arr = arr.concat(int))
  // console.log(arr)
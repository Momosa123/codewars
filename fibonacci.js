
  const fibo = {
      0: 0,
      1: 1
    }

function fibonacci (n) {
  
    if(fibo[n-1]===undefined) 
    fibo[n-1] = fibonacci(n-1)

    if(!fibo[n-2]===undefined)
    fibo[n-2] = fibonacci(n-2)

    return  fibo[n-1] + fibo[n - 2]

  }


console.log(fibonacci(100))
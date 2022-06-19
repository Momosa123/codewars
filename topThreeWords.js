function topThreeWords(text) {

const count = []
const splitArr = text.split(', ').join('').split(' ')

const uniqueWords = []

// uniqueWords = splitArr.filter((el) => {
//   ! uniqueWords.includes(el)
//   })

splitArr.forEach(
  (el, i) => {if(!uniqueWords.includes(el)) {
    uniqueWords.push(el)
    count.push(0)
  }}
)

splitArr.forEach(
  word => {const i = uniqueWords.indexOf(word)
    count[i]++
  }
)

const countCopy = []

count.forEach(
  (el, i) => {if(!countCopy.includes(el)) {
    countCopy.push(el)
  }}
)
countCopy.sort((a,b)=> b-a)
 console.log(countCopy)

 const wordNumber = countCopy.length > 3 ? 3 : countCopy.length


const indexes =[]
 for(let i = 0; i < wordNumber; i++){

   indexes.push(count.indexOf(countCopy[i])) 
 }

const result = []

indexes.forEach(i => result.push(uniqueWords[i]))
// console.log(firstIndex, secondIndex, thirdIndex)
// console.log(uniqueWords)
return result
}

console.log((topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.")))
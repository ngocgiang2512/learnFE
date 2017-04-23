console.log('javascript array')

let randomArray = []

for (i = 0; i < 12; i++) {
  randomArray.push(Math.round(Math.random() * 100))
}

console.log('randomArray:')
console.log(randomArray)
console.log('type: ' + typeof randomArray)
console.log('length: ' + randomArray.length)


/****************** min, max ******************/
let max = randomArray[0]
let min = randomArray[0]

randomArray.map(item => {
  if (item > max) {
    max = item
  }
})
randomArray.map(item => {
  if (item < min) {
    min = item
  }
})

console.log('max: ' + max)
console.log('min: ' + min)

/****************** filter ******************/
lessThan50 = randomArray.filter(item => item < 50)
moreThan50 = randomArray.filter(item => item > 50)

console.log('less than 50: ' + lessThan50)
console.log('more than 50: ' + moreThan50)

/****************** sort ******************/
let ascendingArray = randomArray.slice(0) // copy randomArray to a new object
let descendingArray = randomArray.slice(0) // copy randomArray to a new object
ascendingArray.sort((a,b) => (a - b))
descendingArray.sort((a,b) => (b - a))

console.log('ascendingArray :' + ascendingArray)
console.log('descendingArray :' + descendingArray)

/****************** shift ******************/
console.log('remove the first item:')
randomArray.shift()
console.log(randomArray)

/****************** push ******************/
console.log('add one item to the end:')
randomArray.push(Math.round(Math.random() * 100))
console.log(randomArray)

/****************** pop ******************/
console.log('remove the last item:')
randomArray.pop()
console.log(randomArray)

/****************** slice ******************/
console.log('slice')
let threeFirstItems = randomArray.slice(0, 3) // 0, 1, 2
let threeElementsFromThird = randomArray.slice(2,5) // 2, 3, 4
let fourLastItems = randomArray.slice(-4) // -3, -2, -1, last

console.log('three first items: ', threeFirstItems)
console.log('three items from the third: ', threeElementsFromThird)
console.log('items from third to the end: ', randomArray.slice(2)) // 2, 3, 4 ... last
console.log('four last items', fourLastItems)
console.log('three items from last second', randomArray.slice(-4, -1)) // -3, -2, -1

let randomNumber = Math.round(Math.random() * 100)
let hasRandomNumber = randomArray.indexOf(randomNumber) > -1 ? 'yes' : 'no'
console.log('random Array has ' + randomNumber + ' : ' + hasRandomNumber)





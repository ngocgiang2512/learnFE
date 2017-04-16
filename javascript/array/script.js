console.log('javascript array')

let randomArray = []

for (i = 0; i < 12; i++) {
  randomArray.push(Math.round(Math.random() * 100))
}

console.log('randomArray: ' + randomArray)
console.log('type: ' + typeof randomArray)
console.log('length: ' + randomArray.length)

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

lessThan50 = randomArray.filter(item => item < 50)
moreThan50 = randomArray.filter(item => item > 50)
console.log('less than 50: ' + lessThan50)
console.log('more than 50: ' + moreThan50)

let ascendingArray = randomArray.slice(0) // copy randomArray to a new object
let descendingArray = randomArray.slice(0) // copy randomArray to a new object
ascendingArray.sort((a,b) => (a - b))
descendingArray.sort((a,b) => (b - a))
console.log('ascendingArray :' + ascendingArray)
console.log('descendingArray :' + descendingArray)






function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  this.bubleSort = bubleSort;
  this.selectionSort = selectionSort;
  this.insertionSort = insertionSort;

  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = i;
  }
}

function setData() {
  for (var i = 0; i < numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
  }
}

function clear() {
  for (var i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
  }
}

function insert(element) {
  this.dataStore[this.pos++] = element
}

function toString() {
  var retstr = '';
  for (var i = 0; i < this.dataStore.length; ++i) {
    retstr += this.dataStore[i] + ' ';
  }
  return retstr;
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

var numElements = 20;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());

/* the buble sort */
function bubleSort() {
  var numElements = this.dataStore.length;
  var temp;
  for (var outer = numElements; outer >= 2; --outer) {
    for (var inner = 0; inner < outer - 1; ++inner) {
      if (this.dataStore[inner] > this.dataStore[inner + 1]) {
        swap(this.dataStore, inner, inner + 1);
      }
    }
    // console.log(this.toString());
  }
}

var start = new Date().getTime();
myNums.bubleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log('Elapsed time for the buble sort on ' + numElements + ' elements is: ' + elapsed + ' milliseconds');

/* the selection sort */
function selectionSort() {
  var numElements = this.dataStore.length;
  var min, temp;
  for (var outer = 0; outer < numElements -1; ++outer) {
    min = outer;
    for (var inner = outer + 1; inner < numElements; ++inner) {
      if (this.dataStore[inner] < this.dataStore[min]) {
        min = inner;
      }
    }
    swap(this.dataStore, outer, min);
    // console.log(this.toString());
  }
}

start = new Date().getTime();
myNums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log('Elapsed time for the selection sort on ' + numElements + ' elements is: ' + elapsed + ' milliseconds');

/* the insertion sort */
function insertionSort() {
  var numElements = this.dataStore.length;
  var temp, inner;
  for (var outer = 1; outer < numElements; ++outer) {
    temp = this.dataStore[outer];
    inner = outer;
    while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
      this.dataStore[inner] = this.dataStore[inner -1];
      --inner;
    }
    this.dataStore[inner] = temp;
    // console.log(this.toString());
  }
}

start = new Date().getTime();
myNums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log(myNums.toString());
console.log('Elapsed time for the insertion sort on ' + numElements + ' elements is: ' + elapsed + ' milliseconds')

/* sort function */
function compare(num1, num2) {
  return num1 - num2;
}

start = new Date().getTime();
myNums.dataStore.sort(compare);
stop = new Date().getTime();
elapsed = stop -start;
console.log('Elapsed time for the sort function on ' + numElements + ' elements is: ' + elapsed + ' milliseconds')



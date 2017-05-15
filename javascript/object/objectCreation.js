/* object - new operator */

console.log('1. New operator:');
var person1 = new Object;
person1.name = 'Haruki Murakami';
person1.printName = function() {
  console.log(this.name)
}

person1.printName();

/* object - literal notation */

console.log('2. Literal Notation:');
var person2 = {
  firstName: 'Haruki',
  lastName: 'Murakami',
  printName: function() {
    console.log(this.firstName + ' ' + this.lastName)
  }
}

person2.printName();

person2.nationality = 'Japanese';
person2.printNationality = function() {
  console.log(this.nationality)
}

person2.printNationality();

/* object - constructor pattern */

console.log('3. Constructor Pattern:');
function Person3(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.printName = function() {
    console.log(this.firstName + ' ' + lastName)
  }
}

var person3 = new Person3('Haruki', 'Murakami');
person3.printName();

person3.nationality = 'Japanese';
console.log(person3.nationality);

/* object - factory pattern */
console.log('4. Factory Pattern:')

function createPerson(firstName, lastName) {
  var obj = new Object();
  obj.firstName = firstName;
  obj.lastName = lastName;
  obj.printName = function() {
    console.log(this.firstName + ' ' + lastName)
  }
  return obj;
}

var person4 = createPerson('Haruki', 'Murakami');
person4.printName();

/* object - prototype pattern */
console.log('5. Prototype Pattern:')

function Person5() {}
Person5.prototype.firstName = 'Haruki';
Person5.prototype.lastName = 'Murakami';
Person5.prototype.printName = function() {
  console.log(this.firstName + ' ' + this.lastName);
}

var person5 = new Person5();
person5.printName();

/* object - constructor/prototype pattern */
console.log('6. Combination constructor/prototype pattern');

function Person6(firstName, lastName) {
  this.firstName = firstName;
  this.lastNamw = lastName;
  this.printName = function() {
    console.log(this.firstName + ' ' + this.lastName);
  }
}

Person6.prototype = {
  constructor: Person6,
  setNationality: function(nationality) {
    this.nationality = nationality;
  }, 
  printNationality: function() {
    console.log(this.nationality)
  }
}

var person6a = new Person6('Haruki', 'Murakami');
var person6b = new Person6('David', 'Beckham');

person6a.setNationality('Japanese');
person6b.setNationality('England');

person6a.printNationality();
person6b.printNationality();


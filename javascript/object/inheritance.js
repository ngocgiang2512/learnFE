/* javascript inheritance */
console.log('javascript inheritance:')

var proto = {
  describe: function() {
    return 'name' + ' ' + this.name;
  }
}

var obj = {
  Prototype: proto,
  name: 'obj'
}

console.log(obj.describe);
console.log('javascript object')
function extend(obj, src) {
  for (var key in src) {
    if (src.hasOwnProperty(key)) obj[key] = src[key];
  }
  return obj;
}

// example
var a = { foo: true }
var b = { foo: false, bar: false };
var c = extend(a, b);

console.log(a)
console.log(c);
// { foo: true, bar: false }

function extend(obj, src) {
  Object.keys(src).forEach(function(key) { obj[key] = src[key]; });
  return obj;
}
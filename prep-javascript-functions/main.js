function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(x) {
  return x * 60;
}

var multiplyresult = convertHoursToMinutes(2);
console.log(multiplyresult);

function getGreeting(x) {
  return 'Hello' + x;
}
var addwords = getGreeting(' Chazz');
console.log(addwords);

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var addandmultiply = addAndMultiplyBy5(10, 5);
console.log(addandmultiply);

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

var multiplyanddivide = multiplyAndDivideBy5(35, 10);
console.log(multiplyanddivide);

function subractTwoNumbers(x, y) {
  return x - y;
}

var sub = subractTwoNumbers(22, 7);
console.log('sub', sub);

function getCircleCircumference(x) {
  return 2 * Math.PI * x;
}
var circ = getCircleCircumference(5);
console.log(circ);

function getFullName(x, y) {
  return x + y;
}
var names = getFullName('Chazz', ' Cordell');
console.log(names);

function cube(x) {
  return Math.pow(x, 3);
}
var main = cube(5);
console.log(main);

/*
var names = ['Andrew', 'Julie', 'Jen'];


names.forEach(function(name){
  console.log('forEach', name);
});

names.forEach(n => console.log('arrowFunc', n));

var returnMe = n => n + '!';
console.log(returnMe('Andrew'));

var person = {
  name: 'Andrew',
  greet: function(){
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};
person.greet();
*/
function add(a, b){
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
};

var addExpression = (a, b) => a + b;

console.log(addStatement(1,3));
console.log(addExpression(9,0));

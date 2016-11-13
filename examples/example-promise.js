//http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=91e673e403fb2cfe5b5f69b2b81c5ea1
/*
function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Kiev', function(err, temp) {
  if(err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});


function getTempPromise (location) {
  return new Promise(function(resolve, reject){
    setTimeout(() => {resolve(79); reject('City not found');}, 1000);
  });
}

getTempPromise ('Kiev').then(function(temp){
  console.log('Promise success', temp);
}, function(err){
  console.log('Promise error');
})
*/

function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a !== 'number' || typeof b !== 'number') reject('not numbers');
    resolve(a + b);
  });
}
console.log(typeof)
addPromise(3, {}).then((out)=>{console.log('promise success', out)},
(err) => {console.log('promise error', err)});

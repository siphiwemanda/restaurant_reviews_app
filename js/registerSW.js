if('serviceWorker' in navigator){
  navigator.serviceWorker
  .register('./sw.js')
  .then(function(){
    console.log('registration worked, in RSW');
  })
  .catch(function(){
    console.log('registration failed, in RSW')
  });
}

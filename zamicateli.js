for (var i = 0; i < 10; i++) {
  var func = function(i){
       console.log(i);
   }
   setTimeout(func(i), 1000);
}
var bind = function(func, cont) {
  var bindArgs = [].slice.call(arguments, 2);
  
  return function() {
    
    var funcArgs =[].slice.call(arguments);
    
    return func.apply(cont, bindArgs.concat(funcArgs));
  };
}
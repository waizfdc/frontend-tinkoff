function sum(a) {

  var curSum = a;

  function f(b) {
    if(b) {
      curSum += b;
      return f;
    }
    return curSum;
  }

  return f;
}

console.log(sum(1)(2)(3)());
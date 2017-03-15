var to2 = function(inp) {
  if(inp < 2) return inp.toString();
  return to2(parseInt(inp/2)) + (inp % 2).toString();
}

console.log(to2(99));
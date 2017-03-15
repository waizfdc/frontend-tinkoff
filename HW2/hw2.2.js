var arr1 = [1, 3, 5, 7, 9];
var arr2 = [1, 2, 3, 4];
var tmp = [];
var intersec = [];
var i;

for(i=0; i<arr1.length; i++) {
  tmp[arr1[i]] = 1;
}

for(i=0; i<arr2.length; i++) {
  if(tmp[arr2[i]] === 1) {
    intersec.push(arr2[i]);
  }
}

for(i=0; i<intersec.length; i++) {
  console.log(intersec[i]);
}
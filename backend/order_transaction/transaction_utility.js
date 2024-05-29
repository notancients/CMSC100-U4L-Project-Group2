function sumArray(arr) {
  var total = arr.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
  return total;
}


export {
    sumArray
}
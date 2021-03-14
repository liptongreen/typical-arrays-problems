exports.min = function min (array) {
  if (!array || array.length == 0){
    return 0;
  }else{
    return Math.min.apply(null, array);
  }
}
exports.max = function max (array) {
  if (!array || array.length == 0){
    return 0;
  }else{
    return Math.max.apply(null, array);
  }
}

exports.avg = function avg (array) {
  let a=0;
  if (!array || array.length == 0){
    return 0;
  }else{
    for(i=0;i<array.length;i++){
      a=array[i]+a;
    };
    return a/array.length;;
  }
}

let required=()=>{return 0};
exports.min = function min (array = required()) {
  if (array==0){
    return 0;
  }else{
    return Math.min.apply(null, array);
  }
  ;
}
let re=()=>{return 0};
exports.max = function max (array = re()) {
  if (array==[]||array==Infinity){
    return 0;
  }else{
    return Math.max.apply(null, array);
  }
}

exports.avg = function avg (array = required()) {
  let a=0;
  if (array!=[]||array!=NaN){
    for(i=0;i<array.length;i++){
      a=array[i]+a;
    };
    return a/array.length;
  }else{
    return 0;
  }
}

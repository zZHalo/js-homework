function min(...args){
  var minValue = Infinity;
  for(var i = 0; i < arg.length; i++)
    {
      if(minValue > args[i])
        minValue = args[i];
    }
  return minValue;
}

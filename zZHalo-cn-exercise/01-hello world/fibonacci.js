function fibonacci(n){
  if(n <= 0) return;
  if(n <= 2) return 1;
  let a = 1, b = 1;
  for(var i = 3; i <= n; i++){
    [a, b] = [b, a + b];
  }
  return b;
}

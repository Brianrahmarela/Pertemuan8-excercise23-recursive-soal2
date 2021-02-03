function faktorial(num){
  // console.log(num); 
  if(num!=1){
    // console.log(num); 
    // console.log(num-1); 
    return faktorial(num-1)*num;
  }
  else{
    return 1;
 }
}
console.log(`hasil faktorial 4: ${faktorial(4)}`); 
console.log(`hasil faktorial 5: ${faktorial(5)}`); 
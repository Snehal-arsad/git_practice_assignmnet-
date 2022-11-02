function CheckPrime(num){
  let count=0;

  for(let i=1;i<=num;i++){
    if(num%i==0){
         count++;
    }
  }
  if(count===2){
   return true;
     }
  return false;
}
let ans=CheckPrime(13); 
if(ans == true){
  console.log("It is a prime number");
}
else{
  console.log("It is Not a prime number");
}

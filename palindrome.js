
let bag="";
function CheckPalindrome(str){
  for(let i=str.length-1;i>=0;i--){
    bag=bag+str[i];
  }
  if(str===bag){
    return true;
  }
  return false;
}

let ans=CheckPalindrome("naman")
if(ans==true){
  console.log("Its a palindrome");
}
else{
  console.log("not a palindrome");
}
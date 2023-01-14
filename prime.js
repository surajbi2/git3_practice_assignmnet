function prime(x){
let count=0;
for(let i=1; i<=x; i++){
  if(x%i==0){
    count++;
}
}
  if(count!==2){
   console.log("It is a Prime");
}else{
   console.log("Not Prime");
}
}



prime(5);
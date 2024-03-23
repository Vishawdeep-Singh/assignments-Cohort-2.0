let count=0;
const counter = ()=>{
count+=1;
console.log(count);
setTimeout(counter,1000)
}


   counter();


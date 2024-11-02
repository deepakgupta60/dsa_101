(function main(){
  let ans = isPrime()
  console.log("Answer is: ", ans)
}())


// 1 is not a prime number or not a composite number, its a natural no.

function isPrime()
{
  let n=7
  if(n<2) return false
  for(let i=2;i<n;i++)
    {
      if(n%i==0)
      {
      return "Not Prime"
      }
    }
  return "Prime Number"
}


(function main(){
  let ans = isPrime()
  console.log("Answer is: ", ans)
}())


// 1 is not a prime number or not a composite number, its a natural no.

function isPrime()
{
  // let n=7
  // if(n<2) return false
  // for(let i=2;i<n;i++)
  //   {
  //     if(n%i==0)
  //     {
  //     return "Not Prime"
  //     }
  //   }
  
  // count primes
  let n=10
  if(n<2) return false
  let count=0;
  for(let i=2;i<n;i++)
    {
      if(n%i!=0)
        {
          count++
        }
  }
  
  
  return  count
  
}


(function main(){
  let ans = reverse()
  console.log("answer: ", ans)
}())

function reverse()
{
  let rev=0;
  let n=7145;
  while(n>0)
    {
      rev=rev*10+n%10;
      n=Math.floor(n/10)
    }
  return rev
}


(function main(){
  let ans = reverse()
  console.log("answer: ", ans)
}())

function reverse()
{
  
  let p1=0;
  let p2=1;
  let fib=0
     let fibbonaci=[p1,p2]
  let n=10
  for(let i=0;i<n;i++)
    {
      fib=p1+p2;
      fibbonaci.push(fib)
      p1=p2;
      p2=fib
    }
  
  console.log(fibbonaci)
  // return fib
}
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
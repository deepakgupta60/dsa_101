(function main(){
    let ans = isPrime()
    console.log("Answer is: ", ans)
  }())
  
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
(function main(){
 
    let ans = fib(7);
    console.log(ans)
  }())
  
  function fib(n)
  {
    // with recursion
    
    if(n<=1)
    {
      return n
    } 
    
    return fib(n-1)+fib(n-2)
    
    // without recursion
    // let p1=0
    // let p2=1
    // if(n<=0)
    //   {
    //     return n
    //   }
    // for(let i=2;i<=n;i++)
    //   {
    //     // console.log(p1)
    //     p3=p1+p2
    //     p1=p2
    //     p2=p3
    //   }
    // return p3
    
    //0+1+1+2+3
    
  }
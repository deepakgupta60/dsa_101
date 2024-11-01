(function main(){
    let ans = testt(4,[2,4,2,5])
    console.log("Answer : ", ans)
  }())
  
  function testt(n, nums)
  {
   
    let arr=[]
    for(let i=0;i<n;i++)
      {
       if(!arr.includes(nums[i]))
         {
           arr.push(nums[i])
         }
        
      }
    // let arr = [2,3,2,2,3]
    // let sets = new Set(arr)
    // return sets.size
    return arr
  }
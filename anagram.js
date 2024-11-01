(function main(){
    let ans = anagram()
    console.log("Answer is: ", ans)
  }())
  
  function anagram()
  {
    
    let str="ABCD";
    let str2="BCD"
  
    if(str.length!=str2.length) return false
    
    str=str.split("").sort().join("")
    str2=str2.split("").sort().join("")
    
    if(str==str2)
      {
        return "true"
      }
    else
      {
        return "false"
      }
  }


  (function main(){
  
    let ans = findAnag()
    
    console.log("Answer is: ", ans)
  
  }())
  
  function anagram(s1,s2)
  {  
    if(s1.length!=s2.length) return false
    
    s1=s1.split("").sort().join("")
    s2=s2.split("").sort().join("")
    
    if(s1==s2)
      {
        return true
      }
    else
      {
        return false
      }
    
  }
  
  function findAnag()
  {
  
    let arr=["cba","abc","bca","pka"]
    let res=[]
    for(let i=0;i<arr.length;i++)
    {
      if(anagram(arr[0], arr[i])==true)
      {
        res.push(arr[i])
      }
    }
    return res.sort()
  }

  // optimized version

  (function main(){
  
    let ans = findAnag()
    
    console.log("Answer is: ", ans)
  
  }())
  
  function anagram(s1,s2)
  {  
    
    if(s1.length!=s2.length) return false
    
    let set1 = new Set(s1)
    let set2 = new Set(s2)
    
    for(let key of set1)
      {
        if(!set2.has(key))
          {
            return false
          }
      }
    return true
    
  }
  
  function findAnag()
  {
  
    let arr=["cba","abc","bca","pka"]
    let res=[]
    for(let i=0;i<arr.length;i++)
    {
      if(anagram(arr[0], arr[i])==true)
      {
        res.push(arr[i])
      }
    }
    return res.sort()
  }

  (function main(){
  
    let ans = findAnag()
    
    console.log("Answer is: ", ans)
  
  }())
  
  function anagram(s1,s2)
  {  
    
    if(s1.length!=s2.length) return false
    
    let set1 = new Set(s1)
    let set2 = new Set(s2)
    
    for(let key of set1)
      {
        if(!set2.has(key))
          {
            return false
          }
      }
    return true
    
  }
  
  function findAnag()
  {
  
    let arr=["cba","abc","bca","pka"]
    let res=[]
    for(let i=0;i<arr.length;i++)
    {
      if(anagram(arr[0], arr[i])==true)
      {
        res.push(arr[i])
      }
    }
    return res.sort()
  }
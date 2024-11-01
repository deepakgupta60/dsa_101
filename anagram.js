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
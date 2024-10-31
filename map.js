(function main(){
    let ans = crudMap()
    console.log("Answer: ", ans)
  }())
  
  function crudMap()
  {
    
    
    let arr = ["January","February","March"]
    let mapData = new Map([
    ["Jan",1], ["Feb", null]
    ])
    // mapData.set("Aug",101)
    // console.log(mapData.get("Aug"))
    // for(let i=0;i<arr.length;i++)
    //   {
    //     mapData.set(arr[i],i+1)
    //   }
  
    return mapData
  }
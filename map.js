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




  (function main(){
    let ans = crudMap()
    console.log("Answer: ", ans)
  }())
  
  function crudMap()
  {
    
    
    // let arr = ["Jan","Feb","Mar"]
    let mapData = new Map()
    mapData.set("Feb",100)
    
    // for(let i=0;i<mapData.size;i++)
    //   {
    //     console.log(mapData.get(arr[i]))
    //   }
    
    console.log(mapData.keys())
    
    // mapData.forEach((value, key)=>console.log(key, value))
    
    // for(let [key, value] of mapData)
    //   {
    //     // let key=arr[0]
    //     // let value = arr[1]
    //     // let [key, value]=arr
    //     console.log(`${key} of ${value}`)
    //     // console.log(arr)
    //   }
    
    
    // mapData.set("Aug",101)
    // console.log(mapData.get("Aug"))
    // for(let i=0;i<arr.length;i++)
    //   {
    //     mapData.set(arr[i],i+1)
    //   }
  
    return mapData
  }
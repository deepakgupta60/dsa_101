// // #### Session 4 String

// // What?
  
// // Array of character, can contain alphanumeric characters, special character.

// // lots of similarly with array
// // concept of indexing
// // common type : slice, indexOf(), lastIndexOf(), split(), slice()
// // common terminologies 


// // Substring vs Subsequence

// // Contiguous part of string is a substring, 
  
// // Subsequence: can't change order -> so that is subsequence

// (function main(){
  
  
  
//     let arr = ["hello", "world"]
//     console.log(arr.join(" ")) // join is to join the 
     
      
//       // create array with empty value..
      
      
      
      
      
//       // let str = "hello world, my name is deepak";
//       // let arr = str.split("");
      
//       // let str=" hello world "
      
//       // let arr = str.split("")
//       // console.log(str)
    
//       // arr = arr.filter(i=>i!=" ")
//       // str = str.replaceAll(" ","")
      
//     //   let res=[]
//     //   for(let i=0;i<arr.length;i++)
//     //     {
//     //       if(arr[i]!==" ")
//     //         {
//     //           res.push(arr[i])
//     //         }
    
//     //     }
      
      
//       // console.log(arr)
//       // let arr ="hello world"
//       // console.log(arr.lastIndexOf(""))
//       // let str = "hello world"
//       // let arr = str.split("");
//       // let res = []
//       // for(let i=0;i<arr.length;i++)
//       //   {
          
//       //     console.log(str[i])
//       //     // if(arr[i]==" ")
//       //     //   {
//       //     //     res.push(arr[i])
//       //     //   }
//       //   }
    
      
//       // let arr =["hello", "world"]
    
//     // let arr =str.trim();
      
//     // let arr = str.filter(i=> i!==" ")
//     // console.log(arr.join(" "));
//     // let arr = str.replace(" ", "");
//       // console.log(arr)
      
//       // string is remove first and last space of the character
      
//     }())




// //     sub string = continguous part of string,
  
// // subsequence =>  all subsequence are not sub string, order has been changed..

// // (0,3) -> 
// //   str.slice(0,3) -> sub string..


// // Subsequence: remove zero of more characters, b/w two indices, without changing the order of the remaining elements..

// // prefix vs suffix

// // begging part of the is prefix

// // Ending part of the suffix..

// // "hello world"

// // prefix = "h", "he", "hell", "hello"

// // string start with hello >

// // valid prefix
// // "h","hell","hello"
// // not valid
// // "hllo" > e is missing
// // "ahello" > not valid - doesn't start with a

// // Suffix: "d", "rld", "ld","world"
// // not valid: "lde", "lo"


// // prefix: substring that occurs at the begining of the string,
// // suffix: substring that occurs end of the string.








// let str = "i lOve leetcode";

// let arr = str.split(" ");
// let res=[];

// let newWord=""
// for(let i=0;i<arr.length;i++)
//   {
    
    
//     if(arr[i].length<=2)
//       {
//         newWord=arr[i].toLowerCase();
//       }
//     else
//       {
//         newWord = capitalize(arr[i])
//       }
//     res.push(newWord)
    
//   }
  
// console.log(res.join(" "))
//   function capitalize(word)
//     {
//       word = word.toLowerCase();
//       return word[0].toUpperCase()+word.slice(1)
//     }

// // function capitalize(word)
// // {
// //   return word[0].toUpperCase()+word.slice(1)
// // }

// // console.log(capitalize("hello")) //
// // console.log(capitalize("deepak")) //




// // let arr ="CBA".split("")

// // console.log(arr.reverse().join(""))



// // Mutable vs immutable

// // String are mutable in javascript
// // > mutable : object value can be changed after initialization

// // e.g. bool, number, string, undefined, null

// // > immutable : object value cann't be changed after initialization

// // e.g. objct, arr, function, 
// // strings > specific of javascript.

// // Common string operations..

// // CRUD -> create read update delete

// // collection, arr, str


// // >>>>>>>>>>>>>>>>>>>>>>>>
// // Reversing a String
// // Check if strings are identical
// // Sorting
// // Concatenation
// // Count Character
// // Removing Character
// // Printing Substring / Subsequence

// // String ="CBA" > ABC
// // Reverse =["a","b","c"].reverse()




// // let arr [3,4,5,2,6];
// // how to check array is sorted or not?

// (function main(){
  
//   let ans = isPalindrom();
//   console.log("Answer is: ",ans)
// }())



// function isPalindrom()
// {
//   let str="apaa"
//   // let arr=str.split(" ")
//   // let n=str.length
//   let left=0, right=str.length-1;
//    while(left<=right)
//      {
      
//        if(str[left]!==str[right])
//          {
//            return false
//          }
//        left++
//        right--
//      }
//   return true
  
// }
// // function isSortedArr()
// // {
// //   let arr =[1,3,4,1]
// //   let left=0, right=1
// //   while(right<arr.length) //1,2,3,4,5
// //   {
// //     if(arr[left]>arr[right])
// //       {
// //         return false
// //       }
// //     left++
// //     right++
// //   }
// //   return true
// // }
// // function isSortedArr()
// // {
// // let arr=[1,2,6,5]
  
// // for(let i=0;i<arr.length;i++)
// //   {
// //     if(arr[i]>arr[i+1] )
// //       {
// //         return "False"
// //       }
// //   }
// //   return "true"
// // }





// // what ?
  
// //   2d array, grid like structure.
// //   think of 1d array stacked on top of each other.
// //   have the concept of rows and columns.

// // Why ?
// //   Heavily used in real life, example board games
// //   used in graph, backtracking, dynamic programming..

// // traversing of the matrix

// // let arr = [[1,2,3]]




// // TC: NxM ->
// // SC: 
// // console.log(matrix[1].length)


// // let originObj = {a:10, b:20}

// // var shallow = {...originObj}

// // originObj.a=50

// // console.log(shallow)


// // Session 5 

// // matrix - 2d or multidimentional array -> array inside array is a matrix
// // how do we initialize the matrix
// // binary search - 

// // let arr = [[1,2,3],[2,3,4],[2,3,4]]


// // console.log(arr[2])







// let mat = [
//   [4, 9, 2], [3, 5, 7], [8, 1, 6]
//  ]
 
//  let diagonalSum=0;
//  let secondarySum=0;
//  let firstRow=0;
 
//  for(let i=0;i<mat.length;i++)
//    {
//       firstRow=mat[0][i];
//    }
 
//  // let ans=sortedArr()
//  // let ans = palindrome()
//  // let ans = findMax()
//  // console.log("answer is:", ans)
 
//  // function iterateCols(mat, colNo)
//  // {
//  //   for(let i=0;i<mat.length;i++)
//  //     {
//  //       console.log(mat[i][colNo])
//  //     }
//  // }
 
//  // function iterateRols(mat, rowNo)
//  // {
//  //   for(let i=0;i<mat.length;i++)
//  //     {
//  //       console.log(mat[rowNo][i])
//  //     }
//  // }
 
//  // function matrix(mat)
//  // {
 
//  //   for(let i=0;i<mat.length;i++)
//  //     {
//  //       console.log(mat)
//  //       // for(let j=0;j<mat[i].length;j++)
//  //       //   {
//  //       //     console.log(mat[i][j])
//  //       //   }
//  //       // console.log(matrix[i])
//  //     }
//  //   // return matrix
 
//  //   // find the length of the matrix / means row
//  //   // console.log(matrix.length)
//  //   // find the length of the columsn length
//  //   // console.log(matrix[2].length)
//  // }
 
//  // function findMax()
//  // {
//  //   let arr=[2,4,10,2,8]
 
//  //   let max=arr[0] // for first one
 
//  //   for(let i=1;i<arr.length;i++)
//  //     {
//  //       if(arr[i]>max)
//  //       {
//  //         max=arr[i]
//  //       }
//  //     }
//  //   return max
 
//  // }
 
//  // function palindrome()
//  // {
 
//  //   let str="madam"
//  //   let left=0,right=str.length-1
 
//  //   while(left<right)
//  //   {
//  //     if(str[left]!==str[right])
//  //         {
//  //           return false
//  //         }
//  //     left++
//  //     right--
//  //   }
//  //   return true
//  //   // let str="maam"
//  //   // let rev = str.split("").reverse().join("")
//  //   // return str==rev
//  // }
 
//  // TC: 0(n)
//  // SC: 0(1)
//  // function sortedArr(){
//  //   let arr = [2,3,1,4]
//  //   let left=0, right=1;
//  //   while(right<arr.length)
//  //     {
//  //       if(arr[left]>arr[right])
//  //         {
//  //           return false
//  //         }
//  //       left++ // updation
//  //       right++ // updation
//  //     }
//  //   return true
//  // }
 
//  // moving the elements on same dirrection or opposite that is 2 pointer..
 
//  //
//  // function sortedArr(){
//  //   let arr = [3,4,5]
//  //   for(let i=0;i<arr.length-1;i++)
//  //     {
//  //       for(let j=i+1;j<arr.length;j++)
//  //         {
//  //           if(arr[i]>arr[j])
//  //           {
//  //             return false
//  //           }
//  //         }
//  //     }
//  //   return true;;
//  // }
 
//  //TC : 0(n2)
//  //SC : O(1)
 
//  // (function main(){
//  //   let ans = firstCapitalize()
//  //   console.log("Answer is: ", ans)
//  // }())
 
//  // function capitalize(word)
//  // {
//  //   return word[0].toUpperCase()+ word.slice(1)
//  // }
 
//  // function firstCapitalize()
//  // {
//  //   let str="the quick brown fox jumps over the lazy dog"
//  //   let arr = str.split(" ")
//  //   let res=[]
//  //   for(let i=0;i<arr.length;i++)
//  //     {
//  //       let word = capitalize(arr[i])
//  //       res.push(word)
//  //     }
//  //   return res.join(" ")
//  // }
 

//  (function main(){
//   let ans = magicSquare()
//   console.log("answer is: ", ans)
// }())


// function magicSquare()
// {
//   let mat = [
//     [4, 9, 2], 
//     [3, 5, 7], 
//     [8, 1, 6]
//   ] 
//   let diagonalSum=0;
//   let secondarySum=0;
//   let firstMat=0;
//   let lastMat=0;
  
//   for(let i=0;i<mat.length;i++)
//     {
//       firstMat+=mat[0][i]
//       lastMat+=mat[i][mat.length-1]; //
//       diagonalSum+=mat[i][i]
//       secondarySum+=mat[i][mat.length-i-1]
//     }
  
//   if(firstMat==lastMat && diagonalSum==secondarySum)
//     {
//       return "Magic Square"
//     }
  
//   return "Not Magic Square"  
// }



// (function main(){
//   let ans = searching()
//   console.log("answer is: ",ans)
//  }())
 
 
//  function searching()
//  {
//    let str="The Quick Brown Fox Jumb Over the lazy dog"
//    let arr = str.split(" ")
//    console.log(arr)
//    let left=0;
//    let right=arr.length-1
//    while(left<right)
//      {
 
//        [arr[left], arr[right]]=[arr[right], arr[left]]
//        left++
//        right--
//      }
 
   
//      return arr.join(" ")
//  }



//  (function main(){
//   let ans = searching()
//   console.log("answer is: ",ans)
//  }())
 
 
//  function searching()
//  {
//    let str="   The          Quick Brown        Fox       Jumb Over         the lazy dog   "
     
//   let arr = str.trim().split(" ").reverse()
 
//   let res=[]
  
//   for(let i=0;i<arr.length;i++)
//     {
//       if(arr[i]!=="")
//         {
//           res.push(arr[i])
//         }
//     }
   
  
//  //  let arr = str.split(" ")
//  //   console.log(arr)
//  //   let left=0;
//  //  let right=arr.length-1
//  //   while(left<right)
//  //    {
 
//  //       [arr[left], arr[right]]=[arr[right], arr[left]]
//  //       left++
//  //       right--
//  //     }
 
   
//      return res
//  }

// (function main(){
//   let ans = searching()
//   console.log("answer is: ",ans)
//  }())
 
 
//  function searching()
//  {
//    let str="   The          Quick Brown        Fox       Jumb Over         the lazy dog   "
     
//   let arr = str.trim().split(" ").reverse()
 
//   let res=arr.filter((data)=>data!="")
  
  
   
  
//  //  let arr = str.split(" ")
//  //   console.log(arr)
//  //   let left=0;
//  //  let right=arr.length-1
//  //   while(left<right)
//  //    {
 
//  //       [arr[left], arr[right]]=[arr[right], arr[left]]
//  //       left++
//  //       right--
//  //     }
 
   
//      return res
//  }



(function main(){
    let ans = searching()
    console.log("answer is: ",ans)
   }())
   
   
   function searching()
   {
     let str="   The          Quick Brown        Fox       Jumb Over         the lazy dog   "
       
   //  let arr = str.trim().split(" ").reverse()
   
   //  let res=arr.filter((data)=>data!="")
    
    
     
    
   //  let arr = str.split(" ")
   //   console.log(arr)
   //   let left=0;
   //  let right=arr.length-1
   //   while(left<right)
   //    {
   
   //       [arr[left], arr[right]]=[arr[right], arr[left]]
   //       left++
   //       right--
   //     }
   
     
       return str.trim().split(" ").reverse().filter((data)=>data!="").join(" ")
   }



   (function main(){
    let ans = stringComp()
    console.log("answer is: ", ans)
  }())
  
  
  function stringComp()
  {
    let str = "aabbccdddcc"
    let curr=str[0]
    let count=1;
    let compress=""
    for(let i=1;i<str.length;i++)
      {
        if(curr==str[i])
          {
            count++;
          }
        else
          {
            compress+=curr+count
            count=1
            curr=str[i]
          }
      }
    compress+=curr+count
    
    if(compress.length<str.length)
      {
        return compress
      }
    else
      {
        return str
      }
  }


  (function main(){
    let ans = stringComp()
    console.log("answer is: ", ans)
  }())
  
  
  function stringComp()
  {
    let str = "aabbccdddcc"
    let curr=str[0]
    let count=1;
    let compress=""
    for(let i=1;i<str.length;i++)
      {
        if(curr==str[i])
          {
            count++;
          }
        else
          {
            compress+=curr+count
            count=1
            curr=str[i]
          }
      }
    compress+=curr+count
    
    if(compress.length<str.length)
      {
        return compress
      }
    else
      {
        return str
      }
  }



  (function main()
{
  let ans =recurs(10)
  console.log("Answer is: ", ans)
 // recurs(10)
 // console.log(ans)
}())

function recurs(n)
{
  
  if(n<1)
    {
      return 0
    }
   return recurs(n-1)+n
  // let sum=0;
  // for(let i=1;i<=n;i++)
  //   {
  //     sum+=i
  //   }
  // return sum
 //  if(n<=0) // terminating condition
 //    {
 //      return
 //    }
 //  console.log(n)
 // recurs(n-1) 
  
  // recursive condition
  // for(let i=n;i>=1;i--)
  //   {
  //     console.log(i)
  //   }
  // return "y"
}

// in recursive
// -> base / terminating
// -> recursive
// -> function signature 



(function main(){
 
  let ans = fib(7);
  console.log(ans)
}())

function fib(n)
{
  let p1=0
  let p2=1
  if(n<=0)
    {
      return n
    }
  for(let i=2;i<=n;i++)
    {
      // console.log(p1)
      p3=p1+p2
      p1=p2
      p2=p3
    }
  return p3
  
  //0+1+1+2+3
  
}
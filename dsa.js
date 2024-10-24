// #### Session 4 String

// What?
  
// Array of character, can contain alphanumeric characters, special character.

// lots of similarly with array
// concept of indexing
// common type : slice, indexOf(), lastIndexOf(), split(), slice()
// common terminologies 


// Substring vs Subsequence

// Contiguous part of string is a substring, 
  
// Subsequence: can't change order -> so that is subsequence

(function main(){
  
  
  
    let arr = ["hello", "world"]
    console.log(arr.join(" ")) // join is to join the 
     
      
      // create array with empty value..
      
      
      
      
      
      // let str = "hello world, my name is deepak";
      // let arr = str.split("");
      
      // let str=" hello world "
      
      // let arr = str.split("")
      // console.log(str)
    
      // arr = arr.filter(i=>i!=" ")
      // str = str.replaceAll(" ","")
      
    //   let res=[]
    //   for(let i=0;i<arr.length;i++)
    //     {
    //       if(arr[i]!==" ")
    //         {
    //           res.push(arr[i])
    //         }
    
    //     }
      
      
      // console.log(arr)
      // let arr ="hello world"
      // console.log(arr.lastIndexOf(""))
      // let str = "hello world"
      // let arr = str.split("");
      // let res = []
      // for(let i=0;i<arr.length;i++)
      //   {
          
      //     console.log(str[i])
      //     // if(arr[i]==" ")
      //     //   {
      //     //     res.push(arr[i])
      //     //   }
      //   }
    
      
      // let arr =["hello", "world"]
    
    // let arr =str.trim();
      
    // let arr = str.filter(i=> i!==" ")
    // console.log(arr.join(" "));
    // let arr = str.replace(" ", "");
      // console.log(arr)
      
      // string is remove first and last space of the character
      
    }())




//     sub string = continguous part of string,
  
// subsequence =>  all subsequence are not sub string, order has been changed..

// (0,3) -> 
//   str.slice(0,3) -> sub string..


// Subsequence: remove zero of more characters, b/w two indices, without changing the order of the remaining elements..

// prefix vs suffix

// begging part of the is prefix

// Ending part of the suffix..

// "hello world"

// prefix = "h", "he", "hell", "hello"

// string start with hello >

// valid prefix
// "h","hell","hello"
// not valid
// "hllo" > e is missing
// "ahello" > not valid - doesn't start with a

// Suffix: "d", "rld", "ld","world"
// not valid: "lde", "lo"


// prefix: substring that occurs at the begining of the string,
// suffix: substring that occurs end of the string.








let str = "i lOve leetcode";

let arr = str.split(" ");
let res=[];

let newWord=""
for(let i=0;i<arr.length;i++)
  {
    
    
    if(arr[i].length<=2)
      {
        newWord=arr[i].toLowerCase();
      }
    else
      {
        newWord = capitalize(arr[i])
      }
    res.push(newWord)
    
  }
  
console.log(res.join(" "))
  function capitalize(word)
    {
      word = word.toLowerCase();
      return word[0].toUpperCase()+word.slice(1)
    }

// function capitalize(word)
// {
//   return word[0].toUpperCase()+word.slice(1)
// }

// console.log(capitalize("hello")) //
// console.log(capitalize("deepak")) //




// let arr ="CBA".split("")

// console.log(arr.reverse().join(""))



// Mutable vs immutable

// String are mutable in javascript
// > mutable : object value can be changed after initialization

// e.g. bool, number, string, undefined, null

// > immutable : object value cann't be changed after initialization

// e.g. objct, arr, function, 
// strings > specific of javascript.

// Common string operations..

// CRUD -> create read update delete

// collection, arr, str


// >>>>>>>>>>>>>>>>>>>>>>>>
// Reversing a String
// Check if strings are identical
// Sorting
// Concatenation
// Count Character
// Removing Character
// Printing Substring / Subsequence

// String ="CBA" > ABC
// Reverse =["a","b","c"].reverse()




// let arr [3,4,5,2,6];
// how to check array is sorted or not?

(function main(){
  
  let ans = isPalindrom();
  console.log("Answer is: ",ans)
}())



function isPalindrom()
{
  let str="apaa"
  // let arr=str.split(" ")
  // let n=str.length
  let left=0, right=str.length-1;
   while(left<=right)
     {
      
       if(str[left]!==str[right])
         {
           return false
         }
       left++
       right--
     }
  return true
  
}
// function isSortedArr()
// {
//   let arr =[1,3,4,1]
//   let left=0, right=1
//   while(right<arr.length) //1,2,3,4,5
//   {
//     if(arr[left]>arr[right])
//       {
//         return false
//       }
//     left++
//     right++
//   }
//   return true
// }
// function isSortedArr()
// {
// let arr=[1,2,6,5]
  
// for(let i=0;i<arr.length;i++)
//   {
//     if(arr[i]>arr[i+1] )
//       {
//         return "False"
//       }
//   }
//   return "true"
// }





// what ?
  
//   2d array, grid like structure.
//   think of 1d array stacked on top of each other.
//   have the concept of rows and columns.

// Why ?
//   Heavily used in real life, example board games
//   used in graph, backtracking, dynamic programming..

// traversing of the matrix

// let arr = [[1,2,3]]




// TC: NxM ->
// SC: 
// console.log(matrix[1].length)


// let originObj = {a:10, b:20}

// var shallow = {...originObj}

// originObj.a=50

// console.log(shallow)


// Session 5 

// matrix - 2d or multidimentional array -> array inside array is a matrix
// how do we initialize the matrix
// binary search - 

// let arr = [[1,2,3],[2,3,4],[2,3,4]]


// console.log(arr[2])





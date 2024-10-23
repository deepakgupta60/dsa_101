// ### Session 1 #####
// DSA from scratch
// what why and how
// Quick recap of javascript
// Data Structure -> efficiantly storage the data, 
// Precise: DSA > Combination of two terms -> 
// DATA Strucutre > how do you manage your data,  storing, retrival
// Algorithm > how do you solve a particular problem..

// How ?
// Condsistency is the key, practice daily!!
// that you solve the question..
// what is the online plateform, how do you manage it..
// #### Programming Fundamentals: 
// >> Variabls -> let, var, const
// let and const -> once created can't be change
// var is changable.

// let name = "chirag"

// ##### Different Javascript in Datatypes
// -> Primitive :> String, Boolean, Number, Null, Undefined, Symbol
// -> Non Primitive :> Functions, Array, Objects..

// #### Datatype vs DataStructure
// -> what are the difference, 
// data structure holds the data, and data type is a nature of data..

// #### What is constraints..
// A reach to B -> there are multiple ways to reach a path..

// 0<a<100 -> input range only..

// Restriction applied in input.. whenever start to solve a problem.

// We would getting few restrictions..
// within its constraints deliver a solutions..
// between 0 to 100 limitation or constraints given..

// are you end up with bugs. debugging, some issue to it. one after the other.

// debugging - identification and removal of bugs/ errors in the code




// #### Session 3 ####

// what should be time and space complexity

milestone 1: understand the problem clearly
>> understand the problem / question 

milestone 2: finalize approach and execution plan
>> finalize the approach / how to implement / multiple solutions to solve a particular problem. according to sc and tc choose which one is best.
e.g. array should be sorted on descending order..
using inbuilt method or using whole problem

milestone 3: write a pseudo code according to code deliver. 
>> we can create multiple ways / methods.

milestone 4: code out things, actual code write.
>> use librarie as much as possible

milestone 5: prove code work using custom test cases.
>> where code is working or not.

// throughly > nothing is miss..


What are collections?
>> group of data stucture that can holds multiple value.

Specific about Javascript: Arrays, Objects, Map, Set and other built in structures can be considered collections..

don't need to create data structure by scratch, you can use inbuilt collections, you can focus on logic, nothing else.

What is an Array?
>> store items (generally, similar type) in continguous memory location.

arr = [1,2,3,4] --> how can i get the value from the array use indexas > arr[0] > index is nothing but memory location..

what is benefits of array?
>> we can search and get any value.. arr[1]-- retrieve value very easily.

what will be the time complexity of these methods?

arr.push > to add at the end of the array
arr.pop > remove from at the end
arr.unshift > add at the start of the array
arr.shift > remove the array at the starting point.

time and space complexity in every, with push are we simply adding number at the end..





const printName = () => {
	console.log("Hello Deepak");
}

const printNewName = () => {
	console.log("Hello Mayank");
}
console.log("start");

const timerId = setTimeout(() => {
	printName();
},2000)

console.log(timerId);
const timerId1 = setTimeout(() => {
	printName();
},2000)

clearTimeout(timerId1);

console.log("end");

















 









// 1. important skill that comes when writing and executing code.

// Programming Constructs
// -> Conditionals: helps in decision making.

// if else cases -- syntactical ways to write a conditionals..
// if else, and else if, nested if else.

// @ Find Quadrants
// check the already code with given comments
// READ CAREFULLY ALL COMMENTS in code editor..

// > What is 2d plan > four quadrant numbers..
// Sample given input: 

// How we can solve this>> Just figure out, what way the output..

// TEST CASES: Perf Test, Base Test, Edge Test

// 2 and 3 > return 1 as a input

// while loop until and until this condition is false.

// let i=1;
// while(i<=100)
//   {
//     console.log(i)
//     i++;
//   }
// for(let i=1;i<=100;i++)
//   {
//     console.log(i)
//   }

// only focus is what is input and check the output.. or nothing else.. 
// let n=10;

// let ans=n*(n+1)/2;
// console.log(ans)







// #### Session 2 ####

// why do we need time complexity?

// A to B place which is shortest and fastest.
// how can we reach.

// which algorithm is faster?
// how to measure its speed?
// time taken in seconds?
  
// time taken in second
// number of statements executed?
  

// SUM
function add(a,b)
{
  let sum=a+b;
  console.log(sum)
}

// TC: 0(2) > 0(1)
// PrintList
function printList(arr)
{
  for(let i=0;i<arr.length;i++)
    {
      console.log(arr[i])
    }
}
printList([2,3,5,3,2]) 

// TC: 0(n)


function findMax(arr)
{
  let max = arr[0]
  for(let i=1;i<arr.length;i++) //n+1
    {
      if(max<arr[i])// n times
        {
          max=arr[i] // depend on input.
        }
    }
  console.log(max)
}
findMax([20,31,13,1,3])
// TC: 3n+2 > 0(n)

/// BIG O notation only works on worst case scenarios..

// BIO O Notation.
// way to measure how well our algorithm scales as the amount of data increases..


// Big O - worst(worry only)
// Omega - Best
// Theta - Average

// 0(1)>0(log n)>0(n)>0(nlogn)>0(n2)


// SPACE Complexity

// TC: no of operation with respect to input;
// Now check for the performance.

// SC: algorithm uses memory to store data for its operation.
// time taken
// fuel consume - space consume, memory consume.
// which algorithm takes less space(desired)?
// algo1-> 5kb or algo2 -> 10kb
// SC: no of memory consumption based on input size.


// 2+3rd Session+ Milestone+Linkedin

// String are immutable
// > abc => chirag > then it create a new string..

// commonElements find so min(n,m)



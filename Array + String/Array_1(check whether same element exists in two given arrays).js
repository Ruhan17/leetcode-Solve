// Given 2 arrays, create a function that let's a user know (true/false) whether 
//these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

//Naive approach
//O(a * b)

// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'a']

// function checkCommonElement(arr1, arr2){
//   for(let i = 0; i < arr1.length; i++){
//     for(let j = 0; j < arr2.length; j++){
//       if(arr1[i] === arr2[j]){
//         return true
//       }
//     }
//   }
//   return false
// }

// console.log(checkCommonElement(array1, array2))

//Better Approach
//O(a + b)

// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'a']

// function checkCommonElement2(arr1, arr2){
//   // loop through first array and create object where properties === items in the array
//   let map = {};
//   for(let i = 0; i < arr1.length; i++){
//     if(!map[arr1[i]]){
//       const item = arr1[i]
//       map[item] = true
//     }
//   }
//   //console.log(map)
//   // loop through second array and match with the object created
//   for(let i = 0; i < arr2.length; i++){
//     if(map[arr2[i]]){
//       return true
//     }
//   }
//   return false
// }

// console.log(checkCommonElement2(array1, array2))

//more readable approach

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'd']

function checkCommonElement3(arr1, arr2){
  return arr1.some(item => arr2.includes(item))
}

console.log(checkCommonElement3(array1, array2))
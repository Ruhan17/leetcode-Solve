//Given two arrays of integers nums and index. 
//Your task is to create target array under the following rules:
//1. Initially target array is empty.
//2. From left to right read nums[i] and index[i], 
//   insert at index index[i] the value nums[i] in target array.
//3. Repeat the previous step until there are no elements to read in nums and index.

function insert(arr, idx, num){
    //console.log(arr)
    //create a new array
    let newArr = []
    //if the new element is at the last
    //copy the given array & push the new elemnt at the last
    if(idx === arr.length){
        newArr = newArr.concat(arr)
        //console.log(newArr)
        newArr.push(num)
        return newArr
    }
    //else
    let insertedNewElement = false
    //loop through the given array
    //when the index matches, push the given element
    //otherwise copy the element from the given array
    for(let i = 0; i < arr.length; i++){
        if(i === idx && !insertedNewElement){
            newArr.push(num)
            insertedNewElement = true
            i--;
        }
        else{
            newArr.push(arr[i])
        }
    }
    return newArr
}

function createTargetArray(nums, index){
    let ans = []
    //loop through the given arrays
    //insert the nums according to the index using insert() function
    for(let i = 0; i < nums.length; i++){
        ans = insert(ans, index[i], nums[i])
        //console.log(ans)
    }
    return ans
}

//console.log(insert([1, 2, 3], 3, 4))
console.log(createTargetArray([1], [0]))
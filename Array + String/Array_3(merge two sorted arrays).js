//Given two sorted arrays
//Write a function to merge them

function mergeTwoSortedArrays(arr1, arr2){
    //validate input
    if(!arr1 || !arr2 || !Array.isArray(arr1) || !Array.isArray(arr2)){
        return 'something wrong'
    }
    if(arr1.length === 0){
        return arr2
    }
    if(arr2.length === 0){
        return arr1
    }
    //create the array to be returned & additional variables
    const merged = []
    let i = 0
    let j = 0
    let arr1Element = arr1[i]
    let arr2Element = arr2[j]
    //loop through the two arrays
    while(arr1Element || arr2Element){
        if(arr1Element <= arr2Element || !arr2Element){
            merged.push(arr1Element)
            i++
            arr1Element = arr1[i]
        }
        else{
            merged.push(arr2Element)
            j++
            arr2Element = arr2[j]
        }
    }
    //return the merged array
    return merged
}

console.log(mergeTwoSortedArrays([0,4,31], [3,4,6]))
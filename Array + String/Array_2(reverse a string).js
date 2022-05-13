//Given a string
//You should write a function that reverses the string

// function reverseString(str){
//     //validate the input
//     if(!str || typeof str != 'string'){
//         return 'something wrong'
//     }
//     if(str.length < 2){
//         return str
//     }
//     //loop through the string in reverse order and put the elemnts in an array
//     const backwards = []
//     for(let i = str.length - 1; i >= 0; i--){
//         backwards.push(str[i])
//     }
//     //return output
//     return backwards.join('')
// }

// console.log(reverseString('Timbits Hi'))

//Another approach
//More readable
function reverseString2(str){
    //validate the input
    if(!str || typeof str != 'string'){
        return 'something wrong'
    }
    if(str.length < 2){
        return str
    }
    //First Split the strting into an array
    //Then Reverse the array
    //Then make the Array into an String
    return str.split('').reverse().join('')
}

console.log(reverseString2([]))

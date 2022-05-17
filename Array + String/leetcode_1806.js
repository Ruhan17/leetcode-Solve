//check the array with initial one

function check(current){
    for(let i = 0; i < current.length; i++){
        if(current[i] !== i){
            return false
        }
    }
    return true
}


function reinitializePermutation(n){
    let perm = []
    let arr = []
    let operations = 0
    for(let i = 0; i < n; i++){
        perm.push(i)
        arr.push(i)
    }
    for(let i = 0; i < n; i++){
        operations++
        //console.log(perm)
        for(let j = 0; j < n; j++){
            // if(operations === 2){
            //     console.log(perm)
            // }
            if(j % 2 === 0){
                arr[j] = perm[j / 2]
            }
            else{
                arr[j] = perm[n / 2 + (j - 1) / 2]
            }
        }
        perm = arr
        //console.log(perm)
        if(check(perm)){
            return operations
        }
    }
}

console.log(reinitializePermutation(4))
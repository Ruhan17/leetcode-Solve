function checkEnd(arr){
    let count = 0
    let idx = -1
    for(let i = 0; i < arr.length; i++){
        if(arr[i]){
            count++
            idx = i
        }
    }
    if(count === 1) return idx + 1
    else return 0 
}

function findTheWinner(n, k){
    let arr = []
    for(let i = 0; i < n; i++){
        arr.push(1)
    }
    let count = 0
    let kCount = 0
    while(true){
        if(arr[count % n]){
            kCount++
            if(kCount % k === 0){
                arr[count % n] = 0
                if(checkEnd(arr) !== 0) return checkEnd(arr)
            }
        }
        count++
    }
}

console.log(findTheWinner(489, 5))
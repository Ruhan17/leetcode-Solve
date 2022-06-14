/**
 * @param {string[]} logs
 * @return {number}
 */
 var minOperations = function(logs) {
    let count = 0
    for(let i = 0; i < logs.length; i++){
        if(logs[i] === "../"){
            count--
            if(count < 0) count = 0
        }
        else if(logs[i] !== "./"){
            count++
        }
    }
    return count
};
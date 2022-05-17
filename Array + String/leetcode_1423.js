function maxScore(cardPoints, k){
    //first, take cumulative sum of all cells starting from [0]
    var sumFromFirstCell = [];
    let sum = 0;
    for(let i = 0; i < cardPoints.length; i++){
        sum += cardPoints[i]
        sumFromFirstCell.push(sum)
    }
    //console.log(sumFromFirstCell)
    //Then, take cumulative sum of all cells starting from last idx
    var sumFromLastCell = []
    sum = 0; 
    for(let i = cardPoints.length - 1; i >= 0; i--){
        sum += cardPoints[i]
        sumFromLastCell.push(sum)
    }
    //console.log(sumFromLastCell)
    //Now check which element we can take
    let ans = 0
    let valueTakenFromLeft = 0
    let valueTakenFromRight = 0
    let targetIndex = k - 1
    let leftIdx = k - 1
    let rightIdx = cardPoints.length - k
    for(let i = k; i > 0; i--){
        if(sumFromFirstCell[targetIndex] > sumFromLastCell[targetIndex]){
            ans += cardPoints[valueTakenFromLeft]
            sumFromFirstCell[targetIndex] -= cardPoints[valueTakenFromLeft]
            sumFromLastCell[targetIndex] -= cardPoints[rightIdx]
            rightIdx++
            valueTakenFromLeft++
        }
        else {
            ans += cardPoints[cardPoints.length - 1 - valueTakenFromRight]
            sumFromLastCell[targetIndex] -= cardPoints[cardPoints.length - 1 - valueTakenFromRight]
            sumFromFirstCell[targetIndex] -= cardPoints[leftIdx]
            leftIdx--
            valueTakenFromRight++
        }
    }
    return ans
}

console.log(maxScore([9,1,7,9,7,7,9], 3))
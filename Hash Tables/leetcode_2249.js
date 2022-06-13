function countLatticePoints(circles){
    let ans = 0
   for(let i = 0; i <= 200; i++){
       for(let j = 0; j <= 200; j++){
           for(let k = 0; k < circles.length; k++){
                if((circles[k][0] - i) * (circles[k][0] - i) + (circles[k][1] - j) * (circles[k][1] - j) <= circles[k][2] * circles[k][2]){
                    ans++
                    break
                }
           }
       }
   }
   return ans
}

console.log(countLatticePoints([[2,2,2],[3,4,1]]))
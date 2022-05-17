function countWords(words1, words2){
  // loop through first array and create object where properties === items in the array
  let map = {};
  for(let i = 0; i < words1.length; i++){
    if(!map[words1[i]]){
      const item = words1[i]
      map[item] = 1
    }
    else{
        map[words1[i]]++
    }
  }
  //console.log(map)
  //create another map
  let map2 = {}
  // loop through second array and create object where properties === items in the array
  for(let i = 0; i < words2.length; i++){
    if(!map2[words2[i]]){
        const item = words2[i]
        map2[item] = 1
      }
      else{
          map2[words2[i]]++
      }
  }
  //console.log(map2)
  //Now loop through any of the maps to get the answer
  let ans = 0;
  for (const key in map) {
      if(map[key] === 1){
          if(map2[key] === 1){
            ans++
          }
      }
  }
  return ans
}

console.log(countWords(["leetcode","is","amazing","as","is"],  ["amazing","leetcode","is"]))
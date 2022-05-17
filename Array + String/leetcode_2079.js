function wateringPlants(plants, capacity){
    let steps = 0
    let currentCapacity = capacity
    //start watering by looping through plants
    for(let i = 0; i < plants.length; i++){
        steps++;
        currentCapacity -= plants[i]
        //check the next plant if it can be watered
        //if not, go back & fetch water
        if(!(i == plants.length - 1)){
            if(currentCapacity < plants[i + 1]){
                steps += (2 * (i + 1))
                currentCapacity = capacity
            }
        }
        //else, continue
    }
    //return result
    return steps
}

console.log(wateringPlants([7,7,7,7,7,7,7], 8))
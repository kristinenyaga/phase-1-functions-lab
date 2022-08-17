// Code your solution in this file!
function distanceFromHqInBlocks(pickUp){
    return Math.abs(pickUp - 42)
 
}
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)
function distanceFromHqInFeet(pickUp){
    // if(pickUp === 43) { 
    //     return 264
    // }
    // if(pickUp === 50){
    //     return 2112
    // }
    // if(pickUp === 34){
    //     return 2112
    // }
    return (distanceFromHqInBlocks(pickUp)*264)
}
distanceFromHqInFeet(43);
function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264;//change number to absolute when negated
}
distanceTravelledInFeet(43,48)
distanceTravelledInFeet(50,60)
distanceTravelledInFeet(34,28)
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start,destination);
    if(distance>2500){
        return `cannot travel that far`
    }
    else if(distance>0&&distance<=400){
        return 0
    }
    else if(distance<2000){
        return(distance-400)*0.02
    }
    else{
        return 25
    }


}
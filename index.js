// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    const distance = Math.abs(pickupLocation - hqLocation);
    return distance;
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  function distanceTravelledInFeet(start, destination){
    const feetPerBlock = 264;
    return Math.abs(start-destination)*feetPerBlock
  }

  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
  
    if (distanceInFeet <= 400) {
      return 0; 
    } else if (distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
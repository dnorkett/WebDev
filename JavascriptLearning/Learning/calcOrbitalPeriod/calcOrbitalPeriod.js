//Calculates the orbital period and returns to the nearest whole number
function calcPeriod(alt){
    let a = 6367.4447 + alt;
    let u = 398600.4418;
  
    return Math.round((2 * Math.PI) * Math.sqrt((a**3) / u));
  }
  
  
  //Returns new array that transforms the elements' average altitude into their orbital periods (in seconds)
  //Array will contain objects in the format {name: 'name', avgAlt: avgAlt}
  function orbitalPeriod(arr) {
    let returnValues = arr.map(item => {
      return {name: item.name, orbitalPeriod: calcPeriod(item.avgAlt)};
    })
  
    return returnValues;
  }
    
  
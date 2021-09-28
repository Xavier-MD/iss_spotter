const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   } else {
//     console.log('It worked! Returned IP:' , ip);
//   }
// });

// fetchCoordsByIP('99.246.0.66', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   } else {
//     console.log('It worked! Returned coordinates:' , coordinates);
//   }
// });

// const coordsInput = {
//   latitude: '43.5639',
//   longitude: '-79.7172'
// };

// fetchISSFlyOverTimes(coordsInput, (error, flyoverTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   } else {
//     console.log('It worked! Returned flyover times:', flyoverTimes);
//   }
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});

module.exports = {
  printPassTimes
};
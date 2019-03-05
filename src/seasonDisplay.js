import React from 'react';
import { hot}  from 'react-hot-loader';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }  else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props =>  {
  const season = getSeason(props.lat , new Date().getMonth());

  return (
    <div> {season === 'winter' ?
      "Whoa it's really cold!" : "Let's go to the beach!"} </div>
  );
};


export default hot(module)(SeasonDisplay);



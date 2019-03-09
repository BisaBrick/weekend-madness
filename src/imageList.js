import React from 'react';
import {hot} from 'react-hot-loader';

const ImageList = props => {
  const carImages = props.carImages.map((carImage) =>{
    return <img key={carImage.id}
      src={carImage.urls.regular} alt={carImage.description}/>;
  });

  return <div>{carImages}</div>;
};

export default hot(module)(ImageList);
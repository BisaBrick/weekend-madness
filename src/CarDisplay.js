import React from 'react';
import CarSearch from './CarSeach';
import {hot} from 'react-hot-loader';
import ImageList from './imageList';
import unsplash from './api/unsplash';

class CarDisplay extends React.Component {
  state = {
    carImages: [],
  }

   onCarSearchSubmit = async(carSearch) => {


     const response = await unsplash
       .get('/search/photos' , {
         params: { query: carSearch},

       });

     this.setState({ carImages: response.data.results });
   }

   render() {
     return (
       <div className="ui container carDisplay_container">
         <CarSearch onUserSubmit={this.onCarSearchSubmit} />
        Found : {this.state.carImages.length} images
         <ImageList carImages={this.state.carImages}/>
       </div>

     );
   }
}

export default hot(module)(CarDisplay);
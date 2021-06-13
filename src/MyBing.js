
import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps';

const bingmapKey = "AgobT1D9zjzRBeMt5RWRx_beROvoKQbas8CH-FBOAa71a2i8lOaJd-K0YDdukT36"


class MyBing extends Component {

  callBackMethod = () =>{}
  GetConvexHull = () => {
   
   const  map = new window.Microsoft.Maps.Map('#myMap', {});
   return ;  
   console.log(`map`, map)
   
    // map.entities.clear();

    // //Calculate the concave hull.
    // var hullPolygon = window.Microsoft.Maps.SpatialMath.Geometry.concaveHull(pins);

    // //Add the data to the map.
    // map.entities.push(hullPolygon);
    // map.entities.push(pins);

  }
  render() {
    return (
      <div>
       <input style={{position:"fixed", top:'20px',zIndex:1000}} type="button" value="Convex Hull"  />   

      
      <ReactBingmaps
      id="myMap "
      zoom = {10}
      regularPolygons = {
        [
          {
            "center":[13.0827, 80.2717],
            "radius":5,
            "points":3,
            "option": {fillColor: "green", strokeThickness: 2}
          } 
,
          {
            "center":[13.0820, 80.2240],
            "radius":5,
            "points":3,
            "option": {fillColor: "green", strokeThickness: 2}
          } 
          
        ]}
      pushPins = {
        [
          {
            "location":[13.0827, 80.2717], "option":{ color: 'red' }, "addHandler": {"type" : "click", callback: this.callBackMethod }
          } 
        ,
        {
          "location":[13.0820, 80.2240], "option":{ color: 'red' }, "addHandler": {"type" : "click", callback: this.callBackMethod }
        } 
      
        ]
      }  
    bingmapKey =  {bingmapKey} 
    center = {[13.0827, 80.2707]} > 
    </ReactBingmaps>

    </div>
    );
  }
}

export default MyBing;


import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps';

const bingmapKey = "AgobT1D9zjzRBeMt5RWRx_beROvoKQbas8CH-FBOAa71a2i8lOaJd-K0YDdukT36"


class MyBing extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
 
  componentDidUpdate(prevProps, prevState) {
    let values;
    if(this.props.values != prevProps.values)
   {
     values = this.props.values.map(a => a.split(',').map(b=> b.split(','))  )
    console.log('values :>> ', values);}
    this.GetMap(values)
  }
  
  callBackMethod =  () =>{}
   GetMap = async(values) => {
     
        console.log  ("inside")
        const map = new window.Microsoft.Maps.Map('#myMap', {
        // center: new window.Microsoft.Maps.Location(13.0827, 80.2707)
        center: new window.Microsoft.Maps.Location(values[0][0], values[0][1])
    });
     await window.Microsoft.Maps.loadModule("Microsoft.Maps.SpatialMath");
     console.log('center :>> ', window.Microsoft.Maps);
    // var center = map.getCenter();

    //Create custom Pushpin
    var pin1 = new window.Microsoft.Maps.Pushpin({altitude: 0,
      altitudeReference: -1,
      latitude: 13.083,
      longitude: 80.16  }, {
        title: 'Microsoft',
        subTitle: 'City Center',
        text: '1st',
        color:"red"
    });
    var pin3 = new window.Microsoft.Maps.Pushpin( {altitude: 0,
      altitudeReference: -1,
      latitude: 13.083,
      longitude: 80.26  }, {
      title: 'Microsoft',
      subTitle: 'City Center',
      text: '3rd',
      color:"blue"
  });
    //Add the pushpin to the map
    

    var pin2 = new window.Microsoft.Maps.Pushpin( 
      {altitude: 0,
        altitudeReference: -1,
        latitude: 13.123,
        longitude: 80.27  }
      
      
      , {
      title: 'Microsoft',
      subTitle: 'City Center',
      text: 'second',
      color:"black"
  });

  //Add the pushpin to the map
  map.entities.push(pin2);
  map.entities.push(pin3);
  map.entities.push(pin1);
  return this.GetConvexHull({pin1,pin2, pin3} , map)
}
 
  GetConvexHull = ( {pin1,pin2, pin3} , map) => {
 
    const pins = [pin1,pin2, pin3]
  
    //  const  map = new window.Microsoft.Maps.Map('#myMap', {});
    //  console.log('map :>> ', map);
     
    map.entities.clear();  
    var hullPolygon = window.Microsoft.Maps.SpatialMath.Geometry.convexHull(pins);

    //Add the data to the map.
    map.entities.push(hullPolygon);
    map.entities.push(pins);
   
   

  }
  render() {
    console.log('this.myRef :>> ', this.myRef);
    return (
      <div>
       <input style={{position:"fixed", top:'20px',zIndex:1000}} type="button" value="Convex Hull" onClick={() => this.GetMap()}  />   

      
      <ReactBingmaps
      id="myMap "
      zoom = {10}
//       regularPolygons = {
//         [
//           {
//             "center":[13.0827, 80.2717],
//             "radius":5,
//             "points":3,
//             "option": {fillColor: "green", strokeThickness: 2}
//           } 
// ,
//           {
//             "center":[13.0820, 80.2240],
//             "radius":5,
//             "points":3,
//             "option": {fillColor: "green", strokeThickness: 2}
//           } 
          
//         ]}
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
    center = {[13.0827, 80.2707]}  ref={this.myRef}  > 
    </ReactBingmaps>

    </div>
    );
  }
}

export default MyBing;

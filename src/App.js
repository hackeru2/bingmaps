import logo from './logo.svg';
import './App.css';
import MyMap from "./components/MyMap";
import LocationSearchInput from "./components/LocationSearchInput";
import MyBing from "./MyBing";
import { useEffect } from "react";
// import BingMap from "./BingMap";
//AgobT1D9zjzRBeMt5RWRx_beROvoKQbas8CH-FBOAa71a2i8lOaJd-K0YDdukT36
function App() {
 
  return (
    <div className="App">
      {/* <div id="myMap" style={{position:"relative",width:800,height:600 ,border:"1px solid blue"}}></div>   */}
    
      <MyBing />

      {/* <LocationSearchInput   />
      
     <MyMap /> */}
    </div>
  );
}

export default App;

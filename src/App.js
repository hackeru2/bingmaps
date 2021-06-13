import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import MyBing from "./MyBing";
import DynamicFieldSet from "./DynamicFieldSet";
import { useState } from "react";
function App() {
  const [values, setValues] = useState([]);
  return (
    <div className="App">
      <MyBing values={values} />
      <DynamicFieldSet setValues={setValues} />

      
    </div>
  );
}

export default App;

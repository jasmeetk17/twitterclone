import React from 'react';
import './App.css';
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import  Widgets  from './Widgets';


function App() {
  return (
    <div className="app">
      <Sidebar/>
      {/*Feed section*/}
      <Feed/>
      {/*widget*/}
     <Widgets/>
     </div>
  );
}

export default App;

import axios from "axios";
import { useState, useEffect } from "react";
import PlaceList from "./components/PlaceList";


const App = () => {

  return (
       <div className = "App">
        <PlaceList />
       </div>
      );
  
  };
export default App;

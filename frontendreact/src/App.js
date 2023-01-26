import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import PlaceList from "./components/PlaceList";


const App = () => {

  return (
       <div className = "App">
        <PlaceList />
       </div>
      );
  
  };
export default App;

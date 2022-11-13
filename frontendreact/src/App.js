import axios from "axios";
import { useState, useEffect } from "react";
import Place from "./components/Place";

const App = () => {
const [location,setLocation]= useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3001/",{
      params: {
        limit: 10
      }
    })
    .then((res)=>{
      setLocation(res.data.data)})
    .catch(e=>alert('error'))
  },[])
 
  return (
    
    <div className="container">
      <h1>Helsinki Places</h1>
      <div>
        {location.map((place) => (
          <Place key={place.id} name={place.name.en} isOpen={true} address= {place.location.address.street_address} />
        ))}
      </div>
    </div>
  );
  
};
export default App;

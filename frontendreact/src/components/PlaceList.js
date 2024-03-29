import React,{ useState, useEffect  } from "react";
import axios from "axios";
import Place from "./Place";

const PlaceList =() =>{

    const [place,setPlace]= useState([]);
    
    useEffect(()=>{
      axios.get("http://localhost:3001/",{
        params: {
          limit: 10
        }
      })
      .then((res)=>{
        setPlace(res.data.data)})
      .catch(e=>alert('error'))
    },[])

    return(
        <div className="container">
        <h1>Helsinki Places</h1>
        <div className="place-cards">
                {place.map((place, i) => (
                <Place key={place.id} name={place.name.en} isOpen={true} address= {place.location.address.street_address} />
            ))}
        </div>
    </div>
    );
        };

export default PlaceList
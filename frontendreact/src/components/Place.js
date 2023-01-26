import React, { useState } from 'react';
import { 
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/card.css"

const Place = ({place,
  name,
  address,
  isOpen}) =>{

  return (
  <div>

    <Card>
     <div className="card-container"></div>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{address}</CardSubtitle>
        <CardText>
        {isOpen ? "Open" : "Closed"}
        </CardText>    
      </CardBody>
    </Card>

</div>
  );
}

export default Place;

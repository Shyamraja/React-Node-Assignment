import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/card.css"
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

function Place({name, address, isOpen}) {
  return (
    <Card>
   
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{address}</Card.Subtitle>
        <Card.Text>
        {isOpen ? "Open" : "Closed"}
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default Place;

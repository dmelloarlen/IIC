import { useEffect } from "react";
import { Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useState } from "react";
function TextExample() {
    const [event, setEvent] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/events')
            .then((event)=>{
                setEvent(event.data)
            })
    }, [])

  return (
    <>
    <h1 className='text-center'>Events</h1>
    <Col  style={{margin: '10px',display: 'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
      {event.map((event) =>
          
      
        <Card style={{ width: '18rem' }} onClick={() => window.location.href = `/event/${event._id}`}>
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>

        <Card.Subtitle className="mb-2 text-muted">{event.description}</Card.Subtitle>

        
      </Card.Body>
    </Card>
      )}
    
    
    </Col>
    
    </>

  );
}

export default TextExample;
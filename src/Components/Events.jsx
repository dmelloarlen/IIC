import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';

const Events = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [participantData, setParticipantData] = useState({
    name: '',
    email: ''
  });

  const fetchEvent = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/events/${id}`);
      setEvent(response.data);
    } catch (error) {
      console.error('Error fetching event', error);
    }
  };

  React.useEffect(() => {
    fetchEvent();
  }, [id]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParticipantData({ ...participantData, [name]: value });
  };

  const handleRegisterParticipant = async () => {
    try {
      await axios.post(`http://localhost:8000/events/${id}/participants`, participantData);
      handleClose();
      alert('Participant registered successfully');
    } catch (error) {
      console.error('Error registering participant', error);
    }
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div>
        <div className='border border-black p-2' style={{alignItems: 'center',width: '50%', margin: 'auto'}}>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      {event.image && <img src={`http://localhost:8000/file/${event.image}`} alt={event.name} />}
      </div>
      <div className='btn' style={{ marginTop: '-100px' ,marginLeft: '1200px',alignItems: 'center', justifyContent: 'center'}}>
      <Button variant="primary" onClick={handleShow}>
        Register Participant
      </Button>
      </div>
      <div className='btn' style={{ marginTop: '-250px' ,marginLeft: '1200px',alignItems: 'center', justifyContent: 'center'}}>
      <Button variant="primary" >
       Rule BooK
      </Button>
     
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Participant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formParticipantName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={participantData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formParticipantEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={participantData.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRegisterParticipant}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Events;

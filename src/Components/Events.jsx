import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';

const Events = () => {
  const [event, setEvent] = useState(null);
  const [show, setShow] = useState(false);
  const [participantData, setParticipantData] = useState([{
    name: '',
    email: '',
    phone: '',
    year: 'first',
    branch: 'Computer Engineering',
  }]);
  const [groupSize, setGroupSize] = useState(1); // Track group size
  const { id } = useParams();

  const fetchEvent = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/events/${id}`);
      setEvent(response.data);
      setGroupSize(response.data.groupSize); // Set group size from event data
      // Initialize participant data array based on group size
      setParticipantData(Array(response.data.groupSize).fill({
        name: '',
        email: '',
        phone: '',
        year: 'first',
        branch: 'Computer Engineering',
      }));
    } catch (error) {
      console.error('Error fetching event', error);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedParticipants = [...participantData];
    updatedParticipants[index] = {
      ...updatedParticipants[index],
      [name]: value
    };
    setParticipantData(updatedParticipants);
  };

  const handleRegisterParticipants = async () => {
    try {
      // Validate that all participant data is filled
      const allFilled = participantData.every(p => p.name && p.email && p.phone);
      if (!allFilled) {
        alert('Please fill out all participant details.');
        return;
      }

      // Send a single request with the array of participants
      await axios.post(`http://localhost:8000/events/${id}/participants`, { participants: participantData });
      handleClose();
      alert('Participants registered successfully');
    } catch (error) {
      console.error('Error registering participants', error);
      alert('Failed to register participants');
    }
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div>
      <div className='border border-black p-2' style={{ alignItems: 'center', width: '50%', margin: 'auto' }}>
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <p>{new Date(event.date).toLocaleDateString()}</p>
        {event.image && <img src={`http://localhost:8000/file/${event.image}`} alt={event.name} />}
      </div>
      <div className='btn' style={{ marginTop: '-100px', marginLeft: '1200px', alignItems: 'center', justifyContent: 'center' }}>
        <Button variant="primary" onClick={handleShow}>
          Register Participants
        </Button>
      </div>
      <div className='btn' style={{ marginTop: '-250px', marginLeft: '1200px', alignItems: 'center', justifyContent: 'center' }}>
        <Button variant="primary">
          Rule Book
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Participants</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {participantData.map((participant, index) => (
            <Form key={index} className="mb-3">
              <h5>Participant {index + 1}</h5>
              <Form.Group controlId={`formParticipantName${index}`}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={participant.name}
                  onChange={(e) => handleChange(e, index)}
                />
              </Form.Group>
              <Form.Group controlId={`formParticipantEmail${index}`}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={participant.email}
                  onChange={(e) => handleChange(e, index)}
                />
              </Form.Group>
              <Form.Group controlId={`formParticipantPhone${index}`}>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={participant.phone}
                  onChange={(e) => handleChange(e, index)}
                />
              </Form.Group>
              <Form.Group controlId={`formParticipantYear${index}`}>
                <Form.Label>Year</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    label="First Year"
                    name="year"
                    value="first"
                    checked={participant.year === 'first'}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <Form.Check
                    type="radio"
                    label="Second Year"
                    name="year"
                    value="second"
                    checked={participant.year === 'second'}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <Form.Check
                    type="radio"
                    label="Third Year"
                    name="year"
                    value="third"
                    checked={participant.year === 'third'}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
              </Form.Group>
              <Form.Group controlId={`formParticipantBranch${index}`}>
                <Form.Label>Branch</Form.Label>
                <Form.Control
                  as="select"
                  name="branch"
                  value={participant.branch}
                  onChange={(e) => handleChange(e, index)}
                >
                  <option>Computer Engineering</option>
                  <option>Civil Engineering</option>
                  <option>Electrical Engineering</option>
                  <option>Information Technology</option>
                  <option>Mechanical Engineering</option>
                </Form.Control>
              </Form.Group>
            </Form>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRegisterParticipants}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Events;

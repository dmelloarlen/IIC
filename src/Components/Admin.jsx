import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';
import axios from 'axios';

const Admin = () => {
  const [events, setEvents] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState('');
  const [participants, setParticipants] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    image: null,
    rule: ''
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8000/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events', error);
    }
  };

  const fetchParticipants = async (eventId) => {
    try {
      const response = await axios.get(`http://localhost:8000/events/${eventId}/participants`);
      setParticipants(response.data);
    } catch (error) {
      console.error('Error fetching participants', error);
    }
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleAddEvent = async () => {
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      await axios.post('http://localhost:8000/upload', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      fetchEvents();
      handleClose();
    } catch (error) {
      console.error('Error adding event', error);
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/delete/${id}`);
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event', error);
    }
  };

  const handleSelectEvent = (eventId) => {
    setSelectedEventId(eventId);
    fetchParticipants(eventId);
  };

  return (
    <div>
      <h1>Admin</h1>
      <div>     
        <Button onClick={handleShow}>Add Event</Button>
        <Button onClick={fetchEvents}>View Events</Button>
      </div>

      <div className="mt-3">
        {events.map((event) => (
          <div key={event._id} className="event-item">
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>{new Date(event.date).toDateString()}</p>
            <img src={`http://localhost:8000/file/${event.image}`} alt={event.name} style={{ width: '100px', height: '100px' }} />
            <Button variant="danger" onClick={() => handleDeleteEvent(event._id)}>Delete</Button>
            <Button variant="info" onClick={() => handleSelectEvent(event._id)}>View Participants</Button>
          </div>
        ))}
      </div>

      {selectedEventId && (
        <div className="mt-4">
          <h3>Participants</h3>
          <p>Total Participants: {participants.length}</p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((participant, index) => (
                <tr key={participant._id}>
                  <td>{index + 1}</td>
                  <td>{participant.name}</td>
                  <td>{participant.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEventName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formEventDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" value={formData.description} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formEventDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formEventRule">
              <Form.Label>Rule</Form.Label>
              <Form.Control type="text" name="rule" value={formData.rule} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formEventImage">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="image" onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleAddEvent}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Admin;

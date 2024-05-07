import React, { useState } from 'react';
import axios from 'axios';

function CreateRentalComponent() {
  const [userId, setUserId] = useState('');
  const [avtoId, setAvtoId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/createRental', {
        userId, avtoId, startDate, endDate
      });
      alert('Rental Created: ' + JSON.stringify(response.data));
      setError('');
    } catch (err) {
      setError('Failed to create rental: ' + err.message);
    }
  };

  return (
    <div>
      <h2>Create Rental</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userId} onChange={e => setUserId(e.target.value)} placeholder="User ID" />
        <input type="text" value={avtoId} onChange={e => setAvtoId(e.target.value)} placeholder="Avto ID" />
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} placeholder="Start Date" />
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} placeholder="End Date" />
        <button type="submit">Create Rental</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default CreateRentalComponent;

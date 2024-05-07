import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function GetRentalComponent() {
  const [rentalId, setRentalId] = useState('');
  const [rental, setRental] = useState(null);
  const [error, setError] = useState('');

  const fetchRental = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/getRental?rentalId=${rentalId}`);
      setRental(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch rental: ' + err.message);
      setRental(null);
    }
  };

  return (
    <div>
      <h2>Get Rental</h2>
      <input
        type="text"
        value={rentalId}
        onChange={e => setRentalId(e.target.value)}
        placeholder="Rental ID"
      />
      <button onClick={fetchRental}>Fetch Rental</button>
      {error && <p>{error}</p>}
      {rental && (
        <div>
          <pre>{JSON.stringify(rental, null, 2)}</pre>
          <Link to={`/update/${rentalId}`} className="button">Update Rental</Link>
          <Link to={`/delete/${rentalId}`} className="button">Delete Rental</Link>
        </div>
      )}
    </div>
  );
}

export default GetRentalComponent;

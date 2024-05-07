import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function UpdateRentalComponent() {
  const { id } = useParams();
  const history = useHistory();
  const [rental, setRental] = useState({
    userId: '',
    avtoId: '',
    startDate: '',
    endDate: '',
    status: ''
  });

  useEffect(() => {
    const fetchRental = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/getRental?rentalId=${id}`);
        setRental({
          userId: response.data.userId,
          avtoId: response.data.avtoId,
          startDate: response.data.startDate,
          endDate: response.data.endDate,
          status: response.data.status
        });
      } catch (error) {
        console.error('Failed to fetch rental:', error);
      }
    };
    fetchRental();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRental(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/updateRental`, rental);
      alert('Rental Updated Successfully!');
      history.push('/get');
    } catch (error) {
      alert('Failed to update rental: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Update Rental</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input type="text" name="userId" value={rental.userId} onChange={handleChange} />
        </label>
        <label>
          Avto ID:
          <input type="text" name="avtoId" value={rental.avtoId} onChange={handleChange} />
        </label>
        <label>
          Start Date:
          <input type="date" name="startDate" value={rental.startDate} onChange={handleChange} />
        </label>
        <label>
          End Date:
          <input type="date" name="endDate" value={rental.endDate} onChange={handleChange} />
        </label>
        <label>
          Status:
          <input type="text" name="status" value={rental.status} onChange={handleChange} />
        </label>
        <button type="submit">Update Rental</button>
      </form>
    </div>
  );
}

export default UpdateRentalComponent;

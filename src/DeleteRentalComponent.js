import React from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function DeleteRentalComponent() {
  const { id } = useParams();
  const history = useHistory();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/deleteRental?rentalId=${id}`);
      alert('Rental Deleted Successfully!');
      history.push('/get');
    } catch (error) {
      alert('Failed to delete rental: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Delete Rental</h2>
      <p>Are you sure you want to delete this rental with ID {id}?</p>
      <button onClick={handleDelete}>Delete Rental</button>
    </div>
  );
}

export default DeleteRentalComponent;

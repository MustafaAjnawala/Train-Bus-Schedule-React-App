import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Train.css'; // Import the CSS file for Train component styles

function Train() {
  const [trainData, setTrainData] = useState([]);

  useEffect(() => {
    getTrain();
  }, []);

  const getTrain = async () => {
    try {
      const response = await fetch("http://localhost:8080/trains");
      const data = await response.json();
      setTrainData(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching train data:', error);
    }
  };

  const handleBookSeat = async (trainNumber) => {
    try {
      await axios.put(`http://localhost:8080/trains/${trainNumber}/book-seat`);
      // After successful booking, fetch updated train data to refresh the UI
      await getTrain();
    } catch (error) {
      console.error('Error booking seat:', error);
    }
  };

  return (
    <div>
      <h2 className='name'>Train Schedule</h2>
      <div className='train-container'>
        {trainData.map(train => (
          <div key={train.train_number} className='train-item'>
            <div className='train-name'>{train.train_name}</div>
            <div className='train-details'>
              <div>Train Number: {train.train_number}</div>
              <div>Departure Station: {train.departure_station}</div>
              <div>Departure Time : {train.departure_time}</div>
              <div>Arrival Station: {train.arrival_station}</div>
              <div>Arrival Time : {train.arrival_time}</div>
              <div>Trip Duration(mins) : {train.duration_minutes}</div>
              <div>Fare : {train.fare}</div>
              <div>Available Seats : {train.available_seats}</div>
              <button className='book-seat-button' onClick={() => handleBookSeat(train.train_number)}>Book a seat</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Train;

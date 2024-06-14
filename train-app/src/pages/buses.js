import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Train.css'; // Import the CSS file for Bus component styles

function Bus() {
  const [busData, setBusData] = useState([]);

  useEffect(() => {
    getBus();
  }, []);

  const getBus = async () => {
    try {
      const response = await fetch("http://localhost:8080/buses");
      const data = await response.json();
      setBusData(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching bus data:', error);
    }
  };

  const handleBookSeat = async (busNumber) => {
    try {
      await axios.put(`http://localhost:8080/buses/${busNumber}/book-seat`);
      // After successful booking, fetch updated bus data to refresh the UI
      await getBus();
    } catch (error) {
      console.error('Error booking seat:', error);
    }
  };

  return (
    <div>
      <h2 className='name'>Bus Schedule</h2>
      <div className='train-container'>
        {busData.map(bus => (
          <div key={bus.bus_number} className='train-item'>
            <div className='train-name'>{bus.bus_name}</div>
            <div className='train-details'>
              <div>Bus Number: {bus.bus_number}</div>
              <div>Departure Station: {bus.departure_station}</div>
              <div>Departure Time: {bus.departure_time}</div>
              <div>Arrival Station: {bus.arrival_station}</div>
              <div>Arrival Time : {bus.arrival_time}</div>
              <div>Trip Duration(mins) : {bus.duration_minutes}</div>
              <div>Fare: {bus.fare}</div>
              <div>Available Seats : {bus.available_seats}</div>
              <button className='book-seat-button' onClick={() => handleBookSeat(bus.bus_number)}>Book a seat</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bus;

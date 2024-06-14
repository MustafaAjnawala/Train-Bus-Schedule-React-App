const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sql$123%',
    database: 'awtl-proj2' // Use the correct database name
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Define an endpoint to fetch train data
app.get('/trains', (req, res) => {
    connection.query('SELECT * FROM train', (err, results) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            res.status(500).json({ error: 'Error fetching train data' });
            return;
        }
        res.json(results); // Send the fetched train data as JSON response
    });
});

app.get('/buses', (req, res) => {
    connection.query('SELECT * FROM bus', (err, results) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            res.status(500).json({ error: 'Error fetching train data' });
            return;
        }
        res.json(results); // Send the fetched train data as JSON response
    });
});

app.put('/trains/:trainNumber/book-seat', (req, res) => {
    const { trainNumber } = req.params;
  
    // Execute a SQL UPDATE query to decrement the available seats count by one for the specified train number
    const sql = `UPDATE train SET available_seats = available_seats - 1 WHERE train_number = ?`;
  
    connection.query(sql, [trainNumber], (err, result) => {
      if (err) {
        console.error('Error updating available seats:', err);
        res.status(500).json({ error: 'Error updating available seats' });
        return;
      }
  
      // Check if any rows were affected by the query
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Train not found' });
        return;
      }
  
      // Send a success response
      res.status(200).send('Seat booked successfully');
    });
  });

  // Define an endpoint to book a seat on a bus
app.put('/buses/:busNumber/book-seat', (req, res) => {
    const busNumber = req.params.busNumber;

    // Decrease the available seats for the specified bus number by one
    connection.query('UPDATE bus SET available_seats = available_seats - 1 WHERE bus_number = ?', [busNumber], (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            res.status(500).json({ error: 'Error booking seat on the bus' });
            return;
        }
        res.status(200).json({ message: 'Seat booked successfully' });
    });
});


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

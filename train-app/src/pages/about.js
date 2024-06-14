import React from 'react';
import '../css/about.css'; // Import the CSS file for LandingPage component styles

function LandingPage() {
  return (
    <div className="landing-page">
      
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Yatra Dekho is dedicated to providing you with accurate and up-to-date information on train and bus schedules across India.
          Whether you're planning a weekend getaway or a long-distance journey, we're here to help you find the best transportation options
          to suit your needs. Our team is committed to delivering a seamless experience, making travel planning easy and stress-free.
        </p>
        <p>
          With Yatra Dekho, you can explore various routes, check departure and arrival times, compare fares, and even book your tickets online.
          Our user-friendly interface and reliable data ensure that you can make informed decisions and enjoy a smooth travel experience.
        </p>
      </section>
      <footer className="footer">
        <p>© 2024 Yatra Dekho. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;

import React,{ useState }from 'react';
// import logo from './logo1.jpeg '; // Replace './logo.png' with the path to your logo image
import '../css/welcome.css'; // Import the CSS file

import LandingPage from './about';
import Schedule from './schedule';

function Welcome() {
    
    const [schedule,setschedule] = useState(false);
    const [about,setabout] = useState(true);

    
    const handleAboutButtonClick = () => {
        
        setabout(true);
        setschedule(false);
    };
    const handleScheduleButtonClick=() =>{
        
        setabout(false);
        setschedule(true);
    }
    return (
        <div>
            <nav className="nav">
                <div className="logo">
                    <img src="./logo1.jpeg" alt="Logo" style={{ width: '100px', height: 'auto' }} />
                </div>

                <div className="welcome-message">
                    <h1>Welcome to our Train and Bus Schedule Viewer!</h1>
                    
                </div>

                <div className="nav-buttons">
                    <button className="button" onClick={handleScheduleButtonClick}>Schedule</button>
                    <button className="button" onClick={handleAboutButtonClick}>About Us</button>
                </div>
            </nav>
            <p className='para'>We're thrilled to have you here. Explore our schedules, learn more about us, and enjoy your journey with Yatra Dekho!</p>
            <div className='schedule-section'>
                
                {schedule && <Schedule />}
                {about && <LandingPage />}
            </div>
        </div>
    );
}

export default Welcome;

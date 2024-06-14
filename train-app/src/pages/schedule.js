import React,{ useState } from 'react'
import Train from './train';
import Bus from './buses';
import '../css/welcome.css';

function Schedule() {
  const [showTrainSchedule, setShowTrainSchedule] = useState(true);
    const [showBusSchedule,setShowBusSchedule] = useState(false);

    const handleTrainButtonClick = () => {
      setShowTrainSchedule(true);
      setShowBusSchedule(false);
      
  };
  const handleBusButtonClick = () => {
      setShowBusSchedule(true);
      setShowTrainSchedule(false);
      
  };
  return (
    <div>
      <div className='page-buttons'>
                <button onClick={handleTrainButtonClick}>Trains</button>
                <button onClick={handleBusButtonClick}>Buses</button>
            </div>
            <div className='schedule-section'>
                {showTrainSchedule && <Train />}
                {showBusSchedule && <Bus />}
            </div>
    </div>
  )
}

export default Schedule

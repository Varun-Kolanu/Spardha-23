import React from 'react';
import './ResultFixture.css';
import cricket_img from '../Events/image/crickethover.png';
import badminton_img from '../Events/image/badmintonhover.png';
const Fixtures = ({ selectedSport }) => {
  // Replace this with your match information
  const matchData = [
    {
      sport: 'Badminton',
      time: '4:30 pm',
      venue: 'Rajputana Grounds',
      teamA: 'IIT (BHU) Varanasi',
      teamB: 'IIT Delhi',
      round: 'one',
      icon: badminton_img,
    },
    {
      sport: 'Badminton',
      time: '4:30 pm',
      venue: 'Rajputana Grounds',
      teamA: 'IIT (BHU) Varanasi',
      teamB: 'IIT Delhi',
      round: 'one',
      icon: badminton_img,
    },
    {
      sport: 'Cricket',
      time: '4:30 pm',
      venue: 'Rajputana Grounds',
      teamA: 'IIT (BHU) Varanasi',
      teamB: 'IIT Delhi',
      round: 'one',
      icon: cricket_img,
    },
    {
      sport: 'Cricket',
      time: '4:30 pm',
      venue: 'Rajputana Grounds',
      teamA: 'IIT (BHU) Varanasi',
      teamB: 'IIT Delhi',
      round: 'one',
      icon: cricket_img,
    },
    {
      sport: 'Cricket',
      time: '4:30 pm',
      venue: 'Rajputana Grounds',
      teamA: 'IIT (BHU) Varanasi',
      teamB: 'IIT Delhi',
      round: 'one',
      icon: cricket_img,
    },
  ];

  const filteredMatches = matchData.filter(
    (match) => match.sport === selectedSport
  );
  var match = filteredMatches;
  if (selectedSport === 'All') {
    match = matchData;
  }
  return (
    <div className="Supreme">
      {match.map((data, index) => (
        <div className="displayBox">
          <div className="row1">
            <div style={{ display: 'flex' }}>
              <img src={data.icon} style={{ height: '25px' }} alt='sport icon' />
              {data.sport}
            </div>
            {data.time}
          </div>
          <div className="row2">
            {data.venue} | Round {data.round}
          </div>

          <div className="row3" style={{ color: 'black' }}>
            <div className="row4">
              <div className="rectangle"></div>
              {data.teamA}
            </div>
            <span className="x">X</span>
            <div className="row4">
              <div className="rectangle"></div>
              {data.teamB}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fixtures;

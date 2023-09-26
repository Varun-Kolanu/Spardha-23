import React from 'react';
import './ResultFixture.css';
import cricket_img from './icon/cricket.png';

const MatchResults = ({ selectedSport }) => {
  // Replace this with your match results
  const matchData = [
    {
      sport: 'Cricket',
      winner: 'IIT(BHU) Won',
      scoreA: '04',
      scoreB: '06',
      venue: 'Rajputana Grounds',
      teamA: 'IIT (BHU) Varanasi',
      teamB: 'IIT Delhi',
      round: 'one',
      icon: cricket_img,
    },
    {
      sport: 'Cricket',
      winner: 'IIT (BHU) Won',
      scoreA: '04',
      scoreB: '06',
      venue: 'Rajputana Grounds',
      teamA: 'IIT (BHU) Varanasi',
      teamB: 'IIT Delhi',
      round: 'one',
      icon: cricket_img,
    },
    {
      sport: 'Cricket',
      winner: 'IIT (BHU) Won',
      venue: 'Rajputana Grounds',
      teamA: 'IIT (BHU) Varanasi',
      teamB: 'IIT Delhi',
      scoreA: '04',
      scoreB: '06',
      round: 'one',
      icon: cricket_img,
    },
    {
      sport: 'Cricket',
      winner: 'IIT (BHU) Won',
      venue: 'Rajputana Grounds',
      teamA: 'IIT (BHU) Varanasi',
      teamB: 'IIT Delhi',
      scoreA: '04',
      scoreB: '06',
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
            {data.winner}
          </div>
          <div className="row2">
            {data.venue} | Round {data.round}
          </div>

          <div className="row3">
            <div className="row4">
              <div className="rectangle"></div>
              <p>{data.teamA}</p>
              <score className="score">{data.scoreA}</score>
            </div>
            <div style={{ display: 'grid', gridTemplateRows: '6fr' }}>
              <span className="x">X</span>
              <span>FT</span>
            </div>

            <div className="row4">
              <div className="rectangle"></div>
              <p>{data.teamB}</p>
              <score className="score">{data.scoreB}</score>
            </div>
          </div>

          {/* <div className="row3">
            <div className="rectangle"></div>
            <span className="x">X</span>
            <div className="rectangle"></div>
          </div>
          <div className="row4">
            <p>{data.teamA}</p>
            {/* <span className="x" style={{display:'none'}}>X</span> /}
            <p>{data.teamB}</p>
          </div>
          <div className='row5'>
          <score className='score'>{data.scoreA}</score>
          FT
          <score className='score'>{data.scoreB}</score>
            </div> */}
        </div>
      ))}
    </div>
  );
};

export default MatchResults;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ResultFixture.css';
// import cricket_img from '../Events/image/crickethover.png';
// import badminton_img from '../Events/image/badmintonhover.png';
const Fixtures = ({ selectedSport }) => {
  const [matchData, setMatchData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_MICROSERVICE_URL;
    axios
      .get(`${apiUrl}api/v1/games/`)
      .then((response) => {
        // console.log(response.data)
        setMatchData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const filteredMatches =
    selectedSport === 'All'
      ? matchData
      : matchData.filter((match) => match.game_name === selectedSport);

  return (
    <div className="Supreme">
      {loading ? (
        <p>Loading data...</p>
      ) : (
        filteredMatches.map((data, index) => (
          <div className="displayBox" key={index}>
            <div className="row1">
              <div style={{ display: 'flex' }}>
                {/* <img
                  src={data.icon}
                  style={{ height: '25px' }}
                  alt="sport icon"
                /> */}
                {data.game_name}
              </div>
              {data.game_start}
            </div>
            <div className="row2">
              {data.game_venue}
              {/* | Round {data.round }*/}
            </div>

            <div className="row3" style={{ color: 'black' }}>
              <div className="row4">
                <div className="rectangle"></div>
                {data.team1}
              </div>
              <span className="x">X</span>
              <div className="row4">
                <div className="rectangle"></div>
                {data.team2}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Fixtures;

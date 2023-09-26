import React, { useState } from 'react';
import { MdOutlineWatchLater, MdDateRange } from 'react-icons/md';

const MatchList = ({ matches }) => {
  if(matches===undefined)
  return (<></>)
  return (
    <div className="match-list">
      {matches.map((match) => (
        <MatchEntry key={match._id} match={match}/>
      ))}
    </div>
  );
};

function MatchEntry({ match }) {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const dateTime = new Date(match.game_start);

// Extracting date
const year = dateTime.getFullYear();
const month = dateTime.getMonth() + 1; // Months are zero-based
const day = dateTime.getDate();

// Extracting time
const hours = dateTime.getUTCHours();
const minutes = dateTime.getUTCMinutes();
  return (
    <div className="match-item">
      <div className="match-details">
        <div className="match-teams">{match.team1}</div>
        <div className="match-teams">{match.team2}</div>
        {/*
        @NOTE: temporarily removing institution
        <div className="match-info">
          <div>{match.institution}</div>
          <div><BiLocationPlus /></div>
        </div> */}
        <div className="match-time">
          <div>{hours+":"+minutes}</div>
          <div>
            <MdOutlineWatchLater />
          </div>
        </div>
        <div className="match-date">
          <div>{`${day}/${month}/${year}`}</div>
          <div>
            <MdDateRange />
          </div>
        </div>
        <div className="view-details">
          <button onClick={() => setDetailsVisible((k) => !k)}>
            {detailsVisible ? 'Hide Details' : 'View Details'}
          </button>
          {detailsVisible && (
            <p className="details-text">
              <span>Captain_Name</span>
              <br />
              <span>Phone:</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MatchList;

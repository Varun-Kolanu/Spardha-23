import React from 'react';

const Sidebar = ({ sports, onSelectSport, selectedSport }) => {
  return (
    <div className="sidebar1">
      {sports.map((sport) => (
        <div
          key={sport}
          className={`sidebar-icon ${sport === selectedSport ? 'selected' : ''}`}
          onClick={() => onSelectSport(sport)}
        >
          {sport}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

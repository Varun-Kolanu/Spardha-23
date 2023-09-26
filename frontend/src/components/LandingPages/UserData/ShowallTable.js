import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router';
import './Table.css'
// import {CSVLink} from 'react-csv'

const ShowallTable = () => {
//   const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [users, setUsers] = useState([]); // Changed to an array for multiple users
  // const url = `${baseUrl}teams/contingent/all/`;

  useEffect(() => {
    axios
      .get(`${baseUrl}auth/all/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setUsers(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log('error=', err);
      });
  }, [baseUrl, token]);

  return (
    <div>
      {/* Display a list of users */}
      {users.length > 0 ? (
        <div>
        <table className="table">
          <thead>
            <tr>
            <th>S.No</th>
              <th>Name</th>
              <th>Institute</th>
              <th>Phone Number</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td data-label="S.No">{index + 1}</td>
                <td data-label="Name">{user.name}</td>
                <td data-label="">{user.institution_name}</td>
                <td data-label="Phone Number">{user.phone_no}</td>
                <td data-label="">{user.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <span className='btn'> <button  className='csv'> 
          <CSVLink data={users}> Download</CSVLink>
          </button></span> */}
        </div>
      ) : (
       <p>No data</p>
      )}
    </div>
  );
};

export default ShowallTable;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router';
import './Table.css'
// import {CSVLink} from 'react-csv'

const ShowTable = () => {
//   const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [users, setUsers] = useState([]); // Changed to an array for multiple users
  // const url = `${baseUrl}teams/contingent/all/`;

  useEffect(() => {
    axios
      .get(`${baseUrl}teams/contingent/all/`, {
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
              <th>User</th>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Institute</th>
              <th>Phone</th>
              <th>Leader</th>
              <th>Leader Contact</th>
              <th>Boys</th>
              <th>Girls</th>
              <th>Faculty Members</th>
              <th>Supporting Staff</th>
              <th>Games</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td data-label="S.No">{index + 1}</td>
                <td data-label="Name">{user.name}</td>
                <td data-label="">{user.email}</td>
                <td data-label="">{user.designation}</td>
                <td data-label="">{user.institution_name}</td>
                <td data-label="">{user.phone_no}</td>
                <td data-label="">{user.leader_name}</td>
                <td data-label="">{user.leader_contact_num}</td>
                <td data-label="">{user.num_of_boys}</td>
                <td data-label="">{user.num_of_girls}</td>
                <td data-label="">{user.num_of_faculty_members}</td>
                <td data-label="">{user.num_of_supporting_staff}</td>
                <td data-label="">{user.games}</td>
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

export default ShowTable;

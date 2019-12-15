import React, {useState} from 'react';
import './App.css';
import axios from 'axios'



export default function App() {
  const [personInfo, setPersonInfo] = useState([])
  axios.get('http://192.168.0.100:8080/', {
    data: 1-5
  })
  .then(response => {
    console.log(response.data.data)
    setPersonInfo(response.data.data)
  });

  return (
    <div className="App">
      <div>{personInfo.map(info => (
        <div>
          <table class='table_dark'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Funds</th>
              <th>City</th>
              <th>Phone</th>
            </tr>
            <tr>
              <td id={info.id}>{info.name}</td>
              <td id={info.id}>{info.email}</td>
              <td id={info.id}>{info.funds}</td>
              <td id={info.id}>{info.city}</td>
              <td id={info.id}>{info.phone}</td>
            </tr>
          </table>
        </div>
      ))}
      </div>
      <h2>Hello world</h2>
    </div>
  )}


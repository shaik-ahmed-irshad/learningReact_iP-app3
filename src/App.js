import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [data,setData] = useState([])

  useEffect(()=>{
    const getData = async ()=>{
      try {
        let res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setData(res.data)
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  },[])
  return (
    <>
      <center>
          <table>
            <thead>
              <tr>
                <th rowspan="2">ID</th>
                <th rowspan="2">Name</th>
                <th rowspan="2">Username</th>
                <th rowspan="2">Email</th>
                <th rowspan="2">Address</th>
                <th colspan="2">Geo</th>
                <th rowspan="2">Phone</th>
                <th rowspan="2">Website</th>
                <th rowspan="2">Company</th>
              </tr>
              <tr>
                <th>Lat</th>
                <th>Lng</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ele) => (
                <tr key={ele.id}>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.username}</td>
                  <td>{ele.email}</td>
                  <td>{`${ele.address.street}, ${ele.address.city}`}</td>
                  <td>{`${ele.address.geo.lat}`}</td>
                  <td>{`${ele.address.geo.lng}`}</td>
                  <td>{ele.phone}</td>
                  <td>{ele.website}</td>
                  <td>{ele.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </center>
    </>
  );
}


export default App;
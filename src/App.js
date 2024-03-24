import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        let { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setLoading(false);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const extractAddress = (obj) => {
    let arr = Object.values(obj);
    let elems = [];
    for (let i = 0; i < arr.length - 1; i++) {
      elems.push(<p key={i}>{arr[i]}</p>);
    }
    return elems;
  };
  return (
    <>
      <center>
        <table>
          {loading && <Loading />}
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
                {/* <td>{`${ele.address.street}, ${ele.address.city}`}</td> */}
                <td>{extractAddress(ele.address)}</td>
                <td>{`${ele.address.geo.lat}`}</td>
                <td>{`${ele.address.geo.lng}`}</td>
                <td>{ele.phone}</td>
                <td>
                  <a href={ele.website}> {ele.website} </a>
                </td>
                {/* <td>{ele.company.name}</td> */}
                <td>
                  {Object.values(ele.company).map((ele, i) => (
                    <p key={i}>{ele}</p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </>
  );
}

export default App;

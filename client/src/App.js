//*
  import './App.css';
  import {useState, useEffect} from "react";
  import Axios from "axios";

  function App() {
    let x = 0;
    const [listOfUsers, setListOfUsers] = useState([])

    useEffect(() => {
      Axios.get("http://localhost:3001/getUsers").then((response) =>{
        setListOfUsers(response.data)
      })
    }, [])

    const handleClick = () => {
      x++;
    };
    
    return (
      <div className="App">
        <button type="button" onClick={handleClick}>
          Click Me
        </button>
        <div className = "usersDisplay">
          {listOfUsers.map((user) => {
            return <div>
                <h1>Name: {user.name}</h1>
                <h1>email: {user.email}</h1>
                <h1>age: {user.age}</h1>
                </div>

          })}
        </div>
      </div>
    );
  }

  export default App;

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Display MongoDB Data</title>
//     <style>
//         table {
//             width: 50%;
//             margin: 20px auto;
//             border-collapse: collapse;
//         }
//         th, td {
//             padding: 10px;
//             border: 1px solid #ccc;
//             text-align: left;
//         }
//     </style>
// </head>
// <body>
//     <button onclick="fetchData()">Show Data</button>
//     <div id="data-table"></div>

//     <script>
//         function fetchData() {
//             fetch('http://localhost:5000/api/data')
//                 .then(response => response.json())
//                 .then(data => {
//                     let table = '<table><tr><th>Name</th><th>Age</th><th>Email</th></tr>';
//                     data.forEach(item => {
//                         table += `<tr><td>${item.name}</td><td>${item.age}</td><td>${item.email}</td></tr>`;
//                     });
//                     table += '</table>';
//                     document.getElementById('data-table').innerHTML = table;
//                 })
//                 .catch(error => console.error('Error fetching data:', error));
//         }
//     </script>
// </body>
// </html>
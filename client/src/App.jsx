import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);

  // Custom button names and their corresponding API endpoints
  const buttons = [
    { name: "Post", endpoint: "http://localhost:8000/api/Post" },
    { name: "Community", endpoint: "http://localhost:8000/api/Community" },
    { name: "Community Post", endpoint: "http://localhost:8000/api/CommunityPost" },
    { name: "Community Post Comment", endpoint: "http://localhost:8000/api/CommunityPostComment" },
    { name: "Community Report", endpoint: "http://localhost:8000/api/CommunityReport" },
    { name: "Flags Profile", endpoint: "http://localhost:8000/api/FlagsProfile" },
    { name: "Local Community Account", endpoint: "http://localhost:8000/api/LocalCommunityAccount" },
    { name: "Post Comment", endpoint: "http://localhost:8000/api/PostComment" },
    { name: "Post Report", endpoint: "http://localhost:8000/api/PostReport" },
    { name: "Search Tags and Flags", endpoint: "http://localhost:8000/api/SearchTagsAndFlags" },
    { name: "Tags Profile", endpoint: "http://localhost:8000/api/TagsProfile" },
    { name: "User", endpoint: "http://localhost:8000/api/User" },
  ];

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(buttons[0].endpoint); 
        setOutput(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch data.");
        setOutput(null); 
      }
    };

    fetchData(); 
  }, []); 

  const handleClick = async (endpoint) => {
    try {
      const response = await axios.get(endpoint);
      setOutput(response.data);
      setError(null); // Clear any previous error
    } catch (err) {
      setError("Failed to fetch data.");
      setOutput(null); // Clear previous output
    }
  };

  return (
    <div className="App">
      <div className="top-bar">
        {buttons.map((button, index) => (
          <button key={index} onClick={() => handleClick(button.endpoint)}>
            {button.name}
          </button>
        ))}
      </div>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {output && (
          <table>
            <thead>
              <tr>
                {Object.keys(output[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {output.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
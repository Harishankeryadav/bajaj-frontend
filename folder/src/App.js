// // src/components/App.js
// import React, { useState } from "react";
// import JSONInput from "./JSONInput";
// import ResponseDisplay from "./ResponseDisplay";
// import "./App.css";

// const App = () => {
//   const [jsonData, setJsonData] = useState(null);
//   const [response, setResponse] = useState(null);
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const handleSubmit = async data => {
//     setJsonData(data);
//     try {
//       const response = await fetch(
//         "bajaj-production-a0ca.up.railway.app/api/bfhl",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(data),
//         }
//       );
//       const result = await response.json();
//       setResponse(result);
//     } catch (error) {
//       console.error("Error:", error);
//       setResponse({ error: "Failed to fetch data from the API." });
//     }
//   };

//   return (
//     <div className="App">
//       <h1>ABCD123</h1>
//       <JSONInput onSubmit={handleSubmit} />
//       <ResponseDisplay
//         response={response}
//         selectedCategories={selectedCategories}
//         setSelectedCategories={setSelectedCategories}
//       />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import JsonInput from './components/JsonInput';
import Dropdown from './components/Dropdown';
import Result from './components/Result';
import axios from 'axios';

const App = () => {
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Handle JSON input submission
  const handleSubmit = async (jsonData) => {
    try {
      const res = await axios.post('https://bajaj-task-smoky-rho.vercel.app/bfhl', jsonData);
      setResponse(res.data);
    } catch (err) {
      console.error('Error submitting the JSON data', err);
    }
  };

  return (
    <div className="App">
      <h1>RA2111003030105</h1>
      <JsonInput handleSubmit={handleSubmit} />
      {response && (
        <>
          <Dropdown setSelectedOptions={setSelectedOptions} />
          <Result response={response} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
};

export default App;

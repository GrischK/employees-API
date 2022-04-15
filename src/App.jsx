import "./App.css";
import { useState } from "react";
import axios from "axios";
import DisplayEmployee from "./Components/DisplayEmployee";



const sampleEmployee = {
  gender: "male",

  name: {
    first: "Charlie",
    last: "Thompson",
  },

  location: {
    street: {
      number: 761,
      name: "Tay Street",
    },

    city: "Timaru",
    postcode: 76111,
  },

  email: "charlie.thompson@example.com",

  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

export default function App() {
  const getEmployee = () => {
    axios
    .get('https://randomuser.me/api?nat=en')
    .then((response) => response.data)
    .then((data) => {
      setEmployee(data.results[0]);
  });
  };
  
  const [employee, setEmployee] = useState(sampleEmployee);

  return (
    <div className="app">
      <DisplayEmployee employee={employee} />
      <button type="button" onClick={getEmployee}>
        Get new employee
      </button>
    </div>
  );
};
import "./App.css";
import { useState } from "react";
import DisplayEmployee from "./Components/DisplayEmployee";

const sampleEmployee = {

  gender: 'male',

  name: {

    first: 'Charlie',

    last: 'Thompson',

  },

  location: {

    street: {

      number: 761,

      name: 'Tay Street',

    },

    city: 'Timaru',

    postcode: 76111,

  },

  email: 'charlie.thompson@example.com',

  picture: {

    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',

  },

};
function App() {
  return <DisplayEmployee employee={sampleEmployee} />;
}

export default App;

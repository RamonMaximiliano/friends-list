import React, { startTransition } from "react";
import { PersonList } from "./components/PersonList/PersonList";
import { New } from "./components/New/New";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PersonList />} />
          <Route path="/page1" element={<New />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

/* 


Person image:
https://randomuser.me/api/portraits/thumb/men/65.jpg


- Create input component for the creation of people to then create the list of friends

- Use two pages to practice context API, use a tag saying how many friends the list has, this will be the data shared between pages

- Add a delete button to the profile of each


*/

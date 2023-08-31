import React, { startTransition } from "react";
import { PersonList } from "./components/PersonList/PersonList";
import { New } from "./components/New/New";
import "./App.css";
import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const MainContext = createContext("");

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

19:00 min
https://www.youtube.com/watch?v=xuSoqDEkH90&list=PLnHJACx3NwAe5XQDk9xLgym7FF8Q4FYW7&index=2&ab_channel=CodingAddict


Person image:
https://randomuser.me/api/portraits/thumb/men/65.jpg


- Create input component for the creation of people to then create the list of friends

- Use two pages to practice context API, use a tag saying how many friends the list has, this will be the data shared between pages

- Add a delete button to the profile of each


*/

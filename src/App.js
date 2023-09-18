import React, { useState, useEffect } from "react";
import { PersonList } from "./components/PersonList/PersonList";
import { New } from "./components/New/New";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainContext } from "./components/Context/Context";

const App = () => {
  let [contactName, setContactName] = useState('');
  let [contactJob, setContactJob] = useState('');
  let [newContList, setnewContList] = useState([]);
  let [picture, setPicture] = useState("https://randomuser.me/api/portraits/thumb/men/1.jpg")

  //function that creates single contact
  function setContactInfo() {

    if (contactName == '') {
      window.alert("Please provide the contact name")
    } else if (contactJob == '') {
      window.alert("Please provide the contact job")
    } else {

      let newDude = {
        name: contactName,
        job: contactJob,
        pic: picture
      }
      setnewContList([...newContList, newDude]);
      setContactName('')
      setContactJob('')
    }
  };

  return (
    <>
      <BrowserRouter>
        <MainContext.Provider value={{ setContactName, setContactJob, contactName, contactJob, setContactInfo, newContList, picture,setPicture }}>
          <Routes>
            <Route path="/" element={<PersonList />} />
            <Route path="/page1" element={<New />} />
          </Routes>
        </MainContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;

/* 
- Add a delete button to the profile of each

*/

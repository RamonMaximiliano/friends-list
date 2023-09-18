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
  let [sexGender, setSexgender] = useState('Man')



  //function that creates single contact
  function setContactInfo() {
    if (contactName == '') {
      window.alert("Please provide the contact name")
    } else if (contactJob == '') {
      window.alert("Please provide the contact job")
    } else {

      let newDude = {
        name: contactName,
        job: contactJob
      }
      setnewContList([...newContList, newDude]);
      setContactName('')
      setContactJob('')
    }
  };

  return (
    <>
      <BrowserRouter>
        <MainContext.Provider value={{ setContactName, setContactJob, contactName, contactJob, setContactInfo, newContList, setSexgender,sexGender }}>
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

Person image:
https://randomuser.me/api/portraits/thumb/men/65.jpg

https://randomuser.me/api/portraits/thumb/women/10.jpg



- Change the profile picture according to woman or man

- Add a delete button to the profile of each


*/

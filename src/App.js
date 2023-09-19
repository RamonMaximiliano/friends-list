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
    let uuid = crypto.randomUUID();

    if (contactName == '') {
      window.alert("Please provide the contact name")
    } else if (contactJob == '') {
      window.alert("Please provide the contact job")
    } else {

      let newDude = {
        name: contactName,
        job: contactJob,
        pic: picture,
        id: uuid
      }
      setnewContList([...newContList, newDude]);
      setContactName('')
      setContactJob('')
    }
  };

  function deleteContact(e) {
    let updatedContacts = newContList.filter(function (item) {
      return item.id != e;
    })
    setnewContList(updatedContacts)
  }

  return (
    <>
      <MainContext.Provider value={{ setContactName, setContactJob, contactName, contactJob, setContactInfo, newContList, picture, setPicture, deleteContact }}>
        <Routes>
          <Route path="/" element={<PersonList />} />
          <Route path="/page1" element={<New />} />
        </Routes>
      </MainContext.Provider>
    </>
  );
};

export default App;

/* 
return (
  <>
    <BrowserRouter>
      <MainContext.Provider value={{ setContactName, setContactJob, contactName, contactJob, setContactInfo, newContList, picture, setPicture, deleteContact }}>
        <Routes>
          <Route path="/" element={<PersonList />} />
          <Route path="/page1" element={<New />} />
        </Routes>
      </MainContext.Provider>
    </BrowserRouter>
  </>
);
};

export default App; */
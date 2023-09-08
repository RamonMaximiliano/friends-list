import './styles.css';
import { Link } from 'react-router-dom';
import { PersonList } from '../PersonList/PersonList';
import { useState } from 'react';

export const New = () => {
  let [contactName, setContactName] = useState('');
  let [contactJob, setContactJob] = useState('');

function setContactInfo() {


  if(contactName == ''){
    window.alert("Please provide the contact name")
  } else if (contactJob == ''){
    window.alert("Please provide the contact job")
  } else {
    let newContact = {
    name: contactName,
    Job: contactJob
  }
  console.log(newContact)
  setContactName('')
  setContactJob('')
  }
};

  return (
    <>
      <p class="new-button">
        <Link to="/" element={<PersonList />} className="new-button-link">Contacts List</Link>
      </p>
      <div className="main-new">
        <div>
          <label for="name">Name:</label><br />
          <input type="text" name="name" id="name" onChange={e => setContactName(e.target.value)} value={contactName}/>
        </div>
        <div>
          <label for="job">Job:</label><br />
          <input type="text" name="job" id="job" onChange={e => setContactJob(e.target.value)} value={contactJob}/>
        </div>
        <div>
          <input type="button" name="Add" id="Add" value="Add Contact" onClick={setContactInfo}/>
        </div>
      </div>
    </>
  );
};


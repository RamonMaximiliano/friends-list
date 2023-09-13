import './styles.css';
import { Link } from 'react-router-dom';
import { PersonList } from '../PersonList/PersonList';
import { useContext } from 'react';
import { MainContext } from '../Context/Context';

export const New = () => {
  const {setContactName, setContactJob,contactName,contactJob,setContactInfo} = useContext(MainContext);

  return (
    <>
      <p className="new-button">
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


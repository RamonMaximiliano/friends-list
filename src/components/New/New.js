import './styles.css';
import { Link } from 'react-router-dom';
import { PersonList } from '../PersonList/PersonList';
import { useContext } from 'react';
import { MainContext } from '../Context/Context';

export const New = () => {

  const { setContactName, setContactJob, contactName, contactJob, setContactInfo, setPicture } = useContext(MainContext);

  return (
    <>
      <p className="new-button">
        <Link to="/" element={<PersonList />} className="new-button-link" onClick={() => {
          let picNumber = Math.floor(Math.random() * 99)
          setPicture(`https://randomuser.me/api/portraits/thumb/men/${picNumber}.jpg`)
        }} >Contacts List</Link>
      </p>
      <div className="main-new">
        <div>
          <label htmlFor="name">Name</label><br />
          <input type="text" name="name" id="name" onChange={e => setContactName(e.target.value)} value={contactName} />
        </div>
        <div>
          <label htmlFor="job">Job</label><br />
          <input type="text" name="job" id="job" onChange={e => setContactJob(e.target.value)} value={contactJob} />
        </div>
        <div className="radios" >
          <div>
            <label htmlFor="Man">Man</label><br />
            <input type="radio" name="sex" id="Man" defaultChecked={true} onChange={() => {
              let picNumber = Math.floor(Math.random() * 99)
              setPicture(`https://randomuser.me/api/portraits/thumb/men/${picNumber}.jpg`)
            }} />
          </div>
          <div>
            <label htmlFor="Woman">Woman</label><br />
            <input type="radio" name="sex" id="Woman" onChange={() => {
              let picNumber = Math.floor(Math.random() * 99)
              setPicture(`https://randomuser.me/api/portraits/thumb/women/${picNumber}.jpg`)
            }} />
          </div>
        </div>
        <div>
          <input type="button" name="Add" id="Add" value="Add Contact" onClick={setContactInfo} />
        </div>
      </div>
    </>
  );
};


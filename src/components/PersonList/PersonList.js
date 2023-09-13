import './styles.css';
import { Person } from '../Person/Person'
import { Link } from 'react-router-dom';
import { New } from "../New/New";
import { useContext } from 'react';
import { MainContext } from '../Context/Context';

export const PersonList = () => {
  const { newContList } = useContext(MainContext)
  console.log(newContList)

  if (newContList.length == 0) {
    return <>
      <div>
        <p className="new-button">
          <Link to="/page1" element={<New />} className="new-button-link">New contact</Link>
        </p>
        <p className="noContacts">There are no contacts yet<br />
          Please add a new contact!
        </p>
      </div>
    </>
  }
  return (
    <>
      {/* { newContList.length == 0 ? <><p>There are no contacts yet</p> </>:  */}
      <p className="new-button">
        <Link to="/page1" element={<New />} className="new-button-link">New contact</Link>
      </p>
      {
        newContList.map(contact => <Person name={contact.name} job={contact.job} />)
      }

    </>
  )
};


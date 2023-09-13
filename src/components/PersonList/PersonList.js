import './styles.css';
import { Person } from '../Person/Person'
import { Link } from 'react-router-dom';
import { New } from "../New/New";


export const PersonList = () => {
  return (
    <>
      <p className="new-button">
        <Link to="/page1" element={<New />} className="new-button-link">New contact</Link>
      </p>
      <Person />
    </>
  )
};
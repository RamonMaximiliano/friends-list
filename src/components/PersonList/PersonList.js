import './styles.css';
import { Person } from '../Person/Person'
import { Link } from 'react-router-dom';
import { New } from "../New/New";

export const PersonList = () => {
  return (
    <>
      <Person />
      <p class="linkButton">
        <Link to="/page1" element={<New />}>New contact</Link>
      </p>
    </>

  )
};
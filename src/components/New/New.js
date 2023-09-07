import './styles.css';
import { Link } from 'react-router-dom';
import { PersonList } from '../PersonList/PersonList';

export const New = () => {
  return (
    <>
      <p class="new-button">
        <Link to="/" element={<PersonList />} class="new-button-link">Contacts List</Link>
      </p>
      <div class="main-new">
        <div>
          <label for="name">Name:</label><br />
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label for="job">Job:</label><br />
          <input type="text" name="job" id="job" />
        </div>
        <div>
          <input type="button" name="Add" id="Add" value="Add Contact" />
        </div>
      </div>
    </>
  );
};


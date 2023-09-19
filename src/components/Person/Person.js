import './styles.css';
import { useContext } from 'react';
import { MainContext } from '../Context/Context';

export const Person = (props) => {
  const { deleteContact } = useContext(MainContext);

  return (
    <div className="person" id={props.id}>
      <img src={props.picture} alt="Profile picture" className="image" />
      <p className="text">{props.name}</p>
      <p className="text">{props.job}</p>
      <button className="deleteButton" id={props.id} onClick={e => deleteContact(e.target.id)}>X</button>
    </div>
  );
};



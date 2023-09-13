import './styles.css';

export const Person = (props) => {
  const picture = "https://randomuser.me/api/portraits/thumb/men/65.jpg"

  return (
    <div className="person">
      <img src={picture} alt="Profile picture" className="image" />
      <p className="text">{props.name}</p>
      <p className="text">{props.job}</p>
    </div>
  );
};




import './styles.css';

export const Person = () => {
  const picture = "https://randomuser.me/api/portraits/thumb/men/65.jpg"

  return (
    <div className="person">
      <img src={picture} alt="Profile picture" className="image" />
      <p className="text">Name</p>
      <p className="text">Job</p>
    </div>
  );
};




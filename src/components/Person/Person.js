import './styles.css';

export const Person = () =>{
  const picture = "https://randomuser.me/api/portraits/thumb/men/65.jpg"

    return (
      <div class="person">
          <img src={picture} alt="Profile picture" class="image"/>      
          <p class="text">Name</p>
          <p class="text">Job</p>
      </div>
    );
  };




import './navbar.css';
import iconList from '../../assets/icon-list.png';

function Navbar() {
  return (
    <>
      <div className="title">
        <div className="image">
          <img src={iconList} alt="icon list" height="110" width="110" />
        </div>
        <div className="name">
          <h1>Todolist</h1>
          <p>Create your list</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;

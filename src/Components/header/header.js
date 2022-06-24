import "./header.css";
import icon from "../.././Assets/image/icon.png";

const Header = (props) => {
  return (
    <div>
      <div className="headerContainer">
        <div className="header">
          <img className="icon" src={icon} alt="icon" />
          <h1>Weather</h1>
        </div>

        
      </div>
    </div>
  );
};

export default Header;

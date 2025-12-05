import Logo from "../../assets/logo/logo.png";
import Button from "../Button/Button.jsx";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
 const navigate = useNavigate();

  return (
    <div className='nav-container'>
     <div className='logo-container'><img src={Logo} alt="" /></div>

     <div className='btn-container'>
      <Button text="Login" onClick={() => navigate("/login")}/>
      <Button text="Signup" onClick={() => navigate("/signup")}/>
     </div>

    </div>
  )
}

export default Navbar
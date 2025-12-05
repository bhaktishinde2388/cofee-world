import Logo from "../../assets/logo/logo.png";
import Button from "../Button/Button.jsx";
import "./Navbar.css";

function Navbar() {
  return (
    <div className='nav-container'>
     <div className='logo-container'><img src={Logo} alt="" /></div>

     <div className='btn-container'>
      <Button text="Login"/>
      <Button text="Signup"/>
     </div>

    </div>
  )
}

export default Navbar
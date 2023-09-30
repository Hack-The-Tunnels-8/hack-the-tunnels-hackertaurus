import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src="https://img.icons8.com/ios/50/FFC4EB/drawing--v2.png"></img>
          </Link>
      </div>
      <div className="navbar__account">
        {loggedIn() === false ? (
          <>
            <button className='navbar__authentication' onClick={() => navigate("/sign-up")}>Sign Up</button>
            <button className='navbar__authentication' onClick={() => navigate("/login")}>Login</button>
          </>
        ) : (
          <button onClick={() => logout()}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;

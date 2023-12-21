import { useNavigate } from "react-router-dom";
import "./Navbar.css";
// import 'boxicons'

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <i
          className="bx bxs-joystick bx-tada"
          style={{ color: "white", fontSize: "45px" }}
        ></i>
        <nav className="navbar">
          <a href="" onClick={() => navigate("/")}>
            Home
          </a>
        </nav>
      </header>
    </>
  );
}

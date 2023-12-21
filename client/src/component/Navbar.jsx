import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import 'boxicons'

export default function Navbar() {
    const navigate = useNavigate()
    return(
        <>
        <header className='header'>
        <i className='bx bxs-joystick bx-tada' style={{color : "white", fontSize: "45px"}}></i>
            <nav className='navbar'>
                <Link to='/'>
                    Home
                </Link>
                {/* <a href='' onClick={() => navigate('/home')}>Home</a> */}
            </nav>
        </header>
        </>
    )
}
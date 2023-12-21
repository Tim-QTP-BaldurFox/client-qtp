import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import 'boxicons'

export default function Navbar() {
    const navigate = useNavigate()
    return(
        <>
        <header className='header'>
        <i class='bx bxs-joystick bx-tada' style={{color : "white", fontSize: "45px"}}></i>
            <nav className='navbar'>
                <a href='' onClick={() => navigate('/home')}>Home</a>
            </nav>
        </header>
        </>
    )
}
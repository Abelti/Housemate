import { Link } from 'react-router-dom'
import Logo from './Logo'
function Nav() {
    return (
        <div>
            <Logo />
            <nav>
                <ul>
                    <li><Link to="/about">About Home-Mate</Link></li>
                    <li><Link to="/contact">Share Your Thought</Link></li>
                    <li><Link to="/register">Become a Member</Link></li>
                    <li><Link to="/user">Look For Properties</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
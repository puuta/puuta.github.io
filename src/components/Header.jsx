import { Link } from 'react-router-dom';
import logo from '../assets/images/logo_white.png';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const headerClass = location.pathname === '/' ? 'on-frontpage' : 'on-aboutus';
    return (
        <div className={`header ${headerClass}`}>
            <div className='link-container'>
                <Link to="/">Etusivu</Link>
                <Link to="/about">Meistä</Link>
                <Link to="/sydanpuu">Sydänpuusta</Link>
            </div>
            <div className="image-container">
                <img src={logo} alt="Puuta Design Logo" />
            </div>
        </div>
    );
}

export default Header;
import logo from '../assets/images/logo_white.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='link-container'>
                <a href="#etusivu">Etusivu</a>
                <a href="#meista">Meistä</a>
                <a href="#sydanpuusta">Sydänpuusta</a>
            </div>
            <div class="image-container">
                <img src={logo} alt="Puuta Design Logo" />
            </div>
        </div>
    );
}

export default Header;
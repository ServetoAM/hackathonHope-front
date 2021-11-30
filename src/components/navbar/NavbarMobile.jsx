import { slide as Menu } from "react-burger-menu";
import './NavbarMobile.scss'

export default props => {
  return (
    <div className="navbarMobile">
    <Menu {...props}>
      <a className="menu-item" href="/">
        Accueil
      </a>

      <a className="menu-item" href="/web-tv">
        Web TV
      </a>

      <a className="menu-item" href="/equipe">
        Équipe
      </a>

			<a className="menu-item" href="/staff">
        Staff
      </a>

			<a className="menu-item" href="/a-propos">
        A propos
      </a>

			<a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
    </div>
  );
};
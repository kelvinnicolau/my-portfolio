import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faOptinMonster,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase, faHandshakeSimpleSlash, faGear } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
// Importar a variavel Link, caso usar a tag "Link"

const Sidebar = () => {
  return (
    <div className="nav-bar">
      {/* <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link> */}
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="skills-link" to="/skills">
          <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
        </NavLink>
        {/* <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink> */}
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/kelvin-nicolau-9269891bb/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kelvinnicolau"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/kel_nicolas/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar

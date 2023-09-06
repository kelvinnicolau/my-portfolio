import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import Sidebar from '../Sidebar'

export const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'K', 'e', 'l', 'v', 'i', 'n', ' ', 'N', 'i', 'c', 'o', 'l', 'a', 'u']
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 200)

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={18}
            />
          </h1>
          <h2>Front End Developer | Back End Developer</h2>
          <Link to="https://api.whatsapp.com/send?phone=5555999660677&text=Ol%C3%A1%20Kelvin,%20vim%20pelo%20seu%20portf%C3%B3lio!%0A%0A" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </div>
  )
}


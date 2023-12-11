import Loader from 'react-loaders'
import './index.scss'
import Sidebar from '../Sidebar'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { Customers } from '../Customers'

export const Portfolio = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  const titleAbout = ['C', 'u', 's', 't', 'o', 'm', 'e', 'r', 's',' ',]

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
      <div className="container about-page">
        <div className="text-zone">

          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={titleAbout}
              idx={15}
            />
          </h1>
          <Customers/>

        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faLaravel,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Sidebar from '../Sidebar'

export const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const titleAbout = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']

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
          <p>
          I am currently a Full Software Engineer at GH Branding, where I work and have participated in several projects for clients such as Neoway, Qintess, BASF, CNA Construtora, MID Falconi and São José, solving problems both as front-end and back-end.
          </p>
          <p align="LEFT">
          I am a very confident and ambitious person. I enjoy working in a group and moving situations forward to help the group as much as possible.
          </p>
          <p>
          If I needed to define myself in one sentence, it would be a calm person, who thinks positively, likes to play sports and always wants to be evolving.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faLaravel} color="#5ED4F4" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

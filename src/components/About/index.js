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
            Bachelor in Computer Science from URI
            Santo Ângelo and currently working at GH Brandtech. During my
            journey, I contributed to significant projects, including the
            development of an Intranet using Concrete CMS and the creation
            of several websites and landing pages, using technologies such
            as HTML, CSS, PHP, Laravel, JavaScript, MySQL, React,
            Typescript, NodeJS, WordPress and Docker.
          </p>
          <p align="LEFT">
            I specialize in Front-End development, focusing on refining
            design and interactivity to provide exceptional experiences for
            users. I have experience in agile methodologies such as Scrum
            and Kanban. I am always looking to learn and grow
            professionally.
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

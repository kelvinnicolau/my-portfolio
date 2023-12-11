import './index.scss'
import { Link } from 'react-router-dom'
import Netflix from '../../assets/images/netflix-clone.png'
import Loader from 'react-loaders'
import Sidebar from '../Sidebar'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

export const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const titleAbout = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's']

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
                    <div className='container-cards'>
                        <Link to={'https://netflix-clone-git-main-kelvinnicolau.vercel.app/'} target='_blank'>
                            <div className='card-link'>
                                <img className='img-card' src={Netflix} alt='Netflix Clone' />
                                <div className='text-card'>
                                    <h3>Netflix Clone</h3>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
}

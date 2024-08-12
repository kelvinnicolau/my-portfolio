import './index.scss'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import Sidebar from '../Sidebar'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Netflix from '../../assets/images/netflix-clone.png'
import Neoway from '../../assets/images/neoway.png'
import Qintess from '../../assets/images/qintess.png'
import Maio from '../../assets/images/maio.png'
import Personutri from '../../assets/images/personutri.png'
import NutriHelp from '../../assets/images/nutrihelp.png'
import IndustrialBecker from '../../assets/images/industrial.png'
import CasaSolidaria from '../../assets/images/casa-solidaria.png'
import Bamberg from '../../assets/images/bamberg.png'
import GrupoFront from '../../assets/images/grupo-front.png'
import RHM from '../../assets/images/rhm.png'


export const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const titleProjects = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's']

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
            <div className="projects-page">
                <div className="text-zone">

                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={titleProjects}
                            idx={15}
                        />
                    </h1>
                    <div className='container-cards'>
                        <Link to={'https://rhmbalancas.com/'} target='_blank'>
                            <div className='card-link'>
                                <img className='img-card' src={RHM} alt='RHM' />
                                <div className='text-card'>
                                    <h3>RHM Balanças</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={'https://grupofront.com/casa-solidaria/'} target='_blank'>
                            <div className='card-link'>
                                <img className='img-card' src={CasaSolidaria} alt='Casa Solidária' />
                                <div className='text-card'>
                                    <h3>Casa Solidária</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={'https://www.bambergalimentos.com.br/'} target='_blank'>
                            <div className='card-link'>
                                <img className='img-card' src={Bamberg} alt='Bamberg Alimentos' />
                                <div className='text-card'>
                                    <h3>Bamberg Alimentos</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={'https://grupofront.com/'} target='_blank'>
                            <div className='card-link'>
                                <img className='img-card' src={GrupoFront} alt='Grupo Front' />
                                <div className='text-card'>
                                    <h3>Grupo Front</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={'https://personutrieduardamarques.com.br/'} target='_blank'>
                            <div className='card-link'>
                                <img className='img-card' src={Personutri} alt='PersonutriEduardaMarques' />
                                <div className='text-card'>
                                    <h3>Personutri Eduarda Marques</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={'https://nutrihelpia.com/'} target='_blank'>
                            <div className='card-link'>
                                <img className='img-card' src={NutriHelp} alt='NutriHelpIA' />
                                <div className='text-card'>
                                    <h3>NutriHelpIA</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={'https://industrialbecker.com.br/'} target='_blank'>
                            <div className='card-link'>
                                <img className='img-card' src={IndustrialBecker} alt='Industrial Becker' />
                                <div className='text-card'>
                                    <h3>Industrial Becker</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={'https://www.neoway.com.br/'} target='_blank'>
                            <div className='card-link'>
                                <img className='img-card' src={Neoway} alt='Neoway' />
                                <div className='text-card'>
                                    <h3>Neoway</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={'https://qintess.com/'} target='_blank'>
                            <div className='card-link'>
                                <img className='img-card' src={Qintess} alt='Qintess' />
                                <div className='text-card'>
                                    <h3>Qintess</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={'https://www.maiomarketing.com.br/'} target='_blank'>
                            <div className='card-link'>
                                <img className='img-card' src={Maio} alt='Maio Marketing' />
                                <div className='text-card'>
                                    <h3>Maio Marketing</h3>
                                </div>
                            </div>
                        </Link>
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

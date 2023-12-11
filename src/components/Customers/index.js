import './index.scss'
import { Link } from 'react-router-dom'
import Neoway from '../../assets/images/neoway.png'
import Qintess from '../../assets/images/qintess.png'
import Maio from '../../assets/images/maio.png'

export const Customers = () => {

    return (
        <div>
            <div className='container-customers'>
                <h2>
                    Companies and Customers served:
                </h2>
                <div className='container-cards'>
                    <Link to={'https://www.neoway.com.br/'} target='_blank'>
                        <div className='card-link'>
                            <img className='img-card' src={Neoway} alt='Maio Marketing' />
                            <div className='text-card'>
                                <h3>Neoway</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to={'https://qintess.com/'} target='_blank'>
                        <div className='card-link'>
                            <img className='img-card' src={Qintess} alt='Maio Marketing' />
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
                </div>
            </div>
        </div>
    )
}

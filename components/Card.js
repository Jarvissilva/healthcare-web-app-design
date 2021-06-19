import styles from '../styles/components/Card.module.css'
import { useRouter } from 'next/router'

import { TiLocation } from 'react-icons/ti'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { BiTimer, BiHeart } from 'react-icons/bi'

import Rating from './Rating'

const Card = props => {
    const router = useRouter()
    return (
        <div className={`column ${styles.card} ${styles.gridCard}`} onClick={() => router.push('/heathcare-name')} >
            <img src='https://cdn.pixabay.com/photo/2017/03/26/21/54/yoga-2176668_960_720.jpg' />
            <div className={`column ${styles.meta}`}>
                <h2>Super velsao health center for children health</h2>
                <div className={`row ${styles.city}`}>
                    <div className={`row`}>
                        <TiLocation color='var(--primary-color)' size={20} className={styles.location} />
                        <p>Margao, Goa</p>
                    </div>
                    <div className="row">
                        <BiTimer color='var(--primary-color)' size={20} className={styles.distance} />
                        <p>2 Km away</p>
                    </div>
                    <div className={`row ${styles.open}`}>
                        <AiFillCheckCircle color='#fff' size={15} />
                        {/* <AiFillCloseCircle color='#fff' size={15} /> */}
                        <p>Open</p>
                    </div>
                </div>
                <div className={`row ${styles.review}`}>
                    <Rating />
                    <p>| 50 Reviews</p>
                </div>
            </div>
            <SaveBtn />
        </div >
    )
}

const SaveBtn = props => {
    return (
        <div className={`row ${styles.saveBtn}`}>
            <BiHeart size={25} color='var(--primary-color)' />
        </div>
    )
}

export default Card
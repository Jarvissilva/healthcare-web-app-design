import styles from '../styles/components/RelatedCard.module.css'
import { useRouter } from 'next/router'

import { TiLocation } from 'react-icons/ti'

import Rating from './Rating'

const RelatedCard = props => {
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
                </div>
            </div>
        </div >
    )
}


export default RelatedCard
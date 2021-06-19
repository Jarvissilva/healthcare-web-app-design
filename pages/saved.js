import styles from '../styles/pages/Saved.module.css'
import BottomNav from '../components/BottomNav'
import Card from '../components/Card'

import { BsThreeDotsVertical } from 'react-icons/bs'

const Saved = () => {
    return (
        <div className='screen'>
            <div className={`row ${styles.header}`}>
                <div className={`row ${styles.hTitle}`}>
                    <h2>Saved</h2>
                </div>
                <div className={`row ${styles.hMenu}`}>
                    <BsThreeDotsVertical size={27} />
                </div>
            </div>
            <div className={`column ${styles.savedSec}`}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <BottomNav name='saved' />
        </div>
    )
}

export default Saved

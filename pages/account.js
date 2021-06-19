import styles from '../styles/pages/account.module.css'
import BottomNav from '../components/BottomNav'

import { MdKeyboardArrowRight, MdAccountCircle } from 'react-icons/md'
import { BiHealth } from 'react-icons/bi'
import { FiLogOut, FiSettings } from 'react-icons/fi'
import { HiTerminal } from 'react-icons/hi'
import { FcPrivacy } from 'react-icons/fc'

const Account = () => {
    return (
        <div className={`screen`}>
            <div className={`row ${styles.header}`}>
                <div className={`row ${styles.headerTitle}`}>
                    <h2>Account</h2>
                </div>
                <div className={`row ${styles.headerBtn}`}>
                    <FiSettings size={30} />
                </div>
            </div>
            <div className={`column ${styles.tabSec}`}>
                <Tab title='Account details' icon={MdAccountCircle} />
                <Tab title='Register as healthcare' icon={BiHealth} cr='red' />
                <Tab title='Privacy policy' icon={FcPrivacy} />
                <Tab title='Terms & conditions' icon={HiTerminal} cr='var(--primary-color)' />
                <Tab title='Logout' icon={FiLogOut} />
            </div>
            <BottomNav name='account' />
        </div>
    )
}

const Tab = props => {
    return (
        <div className={`row ${styles.tab}`}>
            <div className={`row ${styles.tabIcon}`}>
                <props.icon size={30} color={props.cr} />
            </div>
            <div className={`row ${styles.tabText}`}>
                <p>{props.title}</p>
            </div>
            <div className={`row ${styles.tabBtn}`}>
                <MdKeyboardArrowRight size={30} />
            </div>
        </div>
    )
}

export default Account

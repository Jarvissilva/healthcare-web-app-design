import Styles from '../styles/components/BottomNav.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { RiHomeSmile2Line, RiHomeSmile2Fill, RiSearchEyeFill, RiHeart2Fill } from 'react-icons/ri'
import { RiDashboardFill, RiDashboardLine } from 'react-icons/ri'
import { BiSearchAlt } from 'react-icons/bi'
import { RiUser5Line, RiUser5Fill, RiHeart2Line } from 'react-icons/ri'

const BottomNav = props => {
    const router = useRouter()
    console.log(router.pathname)
    const [activeTab, setActiveTab] = useState(router.pathname)

    const changePage = name => {
        router.push(`${name}`)
    }

    return (
        <nav className={`row ${Styles.bottomNav}`}>
            <div className={`row ${Styles.bnTab}`}>
                {activeTab === '/' ?
                    <RiHomeSmile2Fill
                        size='35'
                        color='var(--primary-color)'
                        onClick={() => changePage('/')}
                    /> :
                    <RiHomeSmile2Line
                        size='35'
                        color='#000'
                        onClick={() => changePage('/')}
                    />}
            </div>
            <div className={`row ${Styles.bnTab}`}>
                {activeTab === '/search' ?
                    <RiSearchEyeFill
                        size='35'
                        color='var(--primary-color)'
                        onClick={() => changePage('/search')}
                    /> :
                    <BiSearchAlt
                        size='35'
                        color='#000'
                        onClick={() => changePage('/search')}
                    />}
            </div>
            <div className={`row ${Styles.bnTab}`}>
                {activeTab === '/saved' ?
                    <RiHeart2Fill
                        size='35'
                        color='var(--primary-color)'
                        onClick={() => changePage('/saved')}
                    /> :
                    <RiHeart2Line
                        size='35'
                        color='#000'
                        onClick={() => changePage('/saved')}
                    />}
            </div>
            {/* <div className={`row ${Styles.bnTab}`}>
                {activeTab === '/account' ?
                    <RiUser5Fill
                        size='35'
                        color='var(--primary-color)'
                        onClick={() => changePage('/account')}
                    /> :
                    <RiUser5Line
                        size='35'
                        color='#000'
                        onClick={() => changePage('/account')}
                    />}
            </div> */}
            <div className={`row ${Styles.bnTab}`}>
                {activeTab === '/healthcare/dashboard' ?
                    <RiDashboardFill
                        size='35'
                        color='var(--primary-color)'
                        onClick={() => changePage('/healthcare/dashboard')}
                    /> :
                    <RiDashboardLine
                        size='35'
                        color='#000'
                        onClick={() => changePage('/healthcare/dashboard')}
                    />}
            </div>
        </nav>
    )
}

export default BottomNav
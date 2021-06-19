import styles from '../../styles/pages/Dashboard.module.css'
import estyles from '../../styles/pages/Healthcare.module.css'
import { useState } from 'react'
import BottomNav from '../../components/BottomNav'

import { FiSettings } from 'react-icons/fi'
import { GrNotification } from 'react-icons/gr'
import { BiHomeHeart } from 'react-icons/bi'
import { RiBarChartBoxLine, RiHeart2Fill } from 'react-icons/ri'
import { BsThreeDotsVertical, BsEyeFill } from 'react-icons/bs'
import { FaShareAlt } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'

import Rating from '@material-ui/lab/Rating';
import { TiLocation } from 'react-icons/ti'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { BiTimer, BiPhone } from 'react-icons/bi'
import { IoGlobeOutline } from 'react-icons/io5'
import { AiOutlineFieldTime } from 'react-icons/ai'
import RRating from '../../components/Rating'

const Dashboard = () => {
    const [tab, setTab] = useState('Overview')
    const [etab, setETab] = useState('OVERVIEW')

    return (
        <div className={`screen`}>
            <div className={`row ${styles.header}`}>
                <div className={`row ${styles.headerTitle}`}>
                    <h2>Dashboard</h2>
                </div>
                <div className={`row ${styles.headerBtn}`}>
                    <BsThreeDotsVertical size={27} />
                </div>
            </div>
            <div className={`row ${styles.tabSec}`}>
                <Tab
                    name='Overview'
                    tab={tab}
                    setTab={setTab}
                    icon={BiHomeHeart}
                />
                <Tab
                    name='Insights'
                    tab={tab}
                    setTab={setTab}
                    icon={RiBarChartBoxLine}
                />
                <Tab
                    name='Notifications'
                    tab={tab}
                    setTab={setTab}
                    icon={GrNotification}
                />
                <Tab
                    name='Settings'
                    tab={tab}
                    setTab={setTab}
                    icon={FiSettings}
                />
                <div className={styles.spacing}></div>
            </div>

            {tab === 'Overview' ?
                <div className={`column ${styles.overviewSec}`}>
                    <div className={`row ${estyles.featuredImg}`}>
                        <img src="/zumba.jpg" />
                    </div>
                    <div className={`column ${estyles.meta}`}>
                        <h2>Super velsao health center for children health</h2>
                        <div className={`row ${estyles.city}`}>
                            <TiLocation color='var(--primary-color)' size={20} className={estyles.location} />
                            <p>Margao, Goa</p>
                            <BiTimer color='var(--primary-color)' size={20} className={estyles.distance} />
                            <p>2 Km away</p>
                            <div className={`row ${estyles.open}`}>
                                <AiFillCheckCircle color='#fff' size={15} />
                                {/* <AiFillCloseCircle color='#fff' size={15} /> */}
                                <p>Open</p>
                            </div>
                        </div>
                        <div className={`row ${estyles.review}`}>
                            <RRating />
                            <p>| 50 Reviews</p>
                        </div>
                    </div>
                    <div className={`row ${estyles.tabBar}`}>
                        <div className={`row ${estyles.tab} ${etab == 'OVERVIEW' ? estyles.activeTab : ''}`} onClick={() => setETab('OVERVIEW')}>
                            <p>OVERVIEW</p>
                        </div>
                        <div className={`row ${estyles.tab} ${etab == 'ADDRESS' ? estyles.activeTab : ''}`} onClick={() => setETab('ADDRESS')}>
                            <p>ADDRESS</p>
                        </div>
                        <div className={`row ${estyles.tab} ${etab == 'SERVICES' ? estyles.activeTab : ''}`} onClick={() => setETab('SERVICES')}>
                            <p>SERVICES</p>
                        </div>
                        <div className={`row ${estyles.tab} ${etab == 'REVIEWS' ? estyles.activeTab : ''}`} onClick={() => setETab('REVIEWS')}>
                            <p>REVIEWS</p>
                        </div>
                    </div>
                    <div className={`column ${etab === 'OVERVIEW' ? estyles.overviewSec : estyles.hide} `}>
                        <div className={`row ${estyles.ovItem}`}>
                            <div className={`row ${estyles.ovIcon}`}>
                                <TiLocation size='25' />
                            </div>
                            <div className={`row ${estyles.ovText}`}>
                                <h1>Margao, Velsao plae bellem</h1>
                            </div>
                        </div>
                        <div className={`row ${estyles.ovItem}`}>
                            <div className={`row ${estyles.ovIcon}`}>
                                <BiPhone size='25' />
                            </div>
                            <div className={`row ${estyles.ovText}`}>
                                <h1>91 9075125673</h1>
                            </div>
                        </div>
                        <div className={`row ${estyles.ovItem}`}>
                            <div className={`row ${estyles.ovIcon}`}>
                                <IoGlobeOutline size='25' />
                            </div>
                            <div className={`row ${estyles.ovText}`}>
                                <a href="https://healtharo.com">www.healtharo.com</a>
                            </div>
                        </div>
                    </div>
                    <div className={`column ${etab === 'ADDRESS' ? estyles.sec : estyles.hide} `}>

                    </div>
                    <div className={`column ${etab === 'SERVICES' ? estyles.sec : estyles.hide} `}>

                    </div>
                    <div className={`column ${etab === 'REVIEWS' ? estyles.reviewSec : estyles.hide} `}>
                        <div className={`row ${estyles.rHeading}`}>
                            <h2>Rate and Review</h2>
                        </div>
                        <Rating className={`row ${estyles.rating}`} color='var(--rating-color)' name="half-rating" defaultValue={2.5} precision={0.5} />
                        <textarea cols="30" rows="10" placeholder='Write your review'></textarea>
                        <div className={`row ${estyles.createReviewBtn}`}>
                            <button>Create Review</button>
                        </div>
                    </div>
                </div>
                : ''}

            {tab === 'Insights' ?
                <div className={`column ${styles.insightSec}`}>
                    <div className={`row ${styles.insightBox}`}>
                        <div className={`row ${styles.inBoxIcon}`}>
                            <BsEyeFill size={30} color='#fff' />
                        </div>
                        <div className={`row ${styles.inBoxTitle}`}>
                            <h3>Impressions</h3>
                        </div>
                        <div className={`row ${styles.inBoxCount}`}>
                            <h3>1000</h3>
                        </div>
                    </div>
                    <div className={`row ${styles.insightBox}`}>
                        <div className={`row ${styles.inBoxIcon}`}>
                            <IoIosPeople size={30} color='#fff' />
                        </div>
                        <div className={`row ${styles.inBoxTitle}`}>
                            <h3>People Reached</h3>
                        </div>
                        <div className={`row ${styles.inBoxCount}`}>
                            <h3>7866</h3>
                        </div>
                    </div>
                    <div className={`row ${styles.insightBox}`}>
                        <div className={`row ${styles.inBoxIcon}`}>
                            <FaShareAlt size={30} color='#fff' />
                        </div>
                        <div className={`row ${styles.inBoxTitle}`}>
                            <h3>Shares</h3>
                        </div>
                        <div className={`row ${styles.inBoxCount}`}>
                            <h3>7866</h3>
                        </div>
                    </div>
                    <div className={`row ${styles.insightBox}`}>
                        <div className={`row ${styles.inBoxIcon}`}>
                            <RiHeart2Fill size={30} color='#fff' />
                        </div>
                        <div className={`row ${styles.inBoxTitle}`}>
                            <h3>Saved</h3>
                        </div>
                        <div className={`row ${styles.inBoxCount}`}>
                            <h3>7866</h3>
                        </div>
                    </div>
                </div>
                : ''}
            {tab === 'Notifications' ?
                <div className={`column ${styles.notifSec}`}>
                    Notifications
                </div>
                : ''}
            {tab === 'Settings' ?
                <div className={`column ${styles.settingSec}`}>
                    Settings
                </div>
                : ''}
            <BottomNav name='dashboard' />
        </div>
    )
}

const Tab = props => {
    return (
        <div
            onClick={() => props.setTab(props.name)}
            className={`row ${styles.tab} ${props.tab == props.name ? styles.activeTab : ''}`}
        >
            <div className={`row ${styles.tabIcon}`}>
                <props.icon size={20} color={props.tab == props.name ? '#fff' : '#000'} />
            </div>
            <p>{props.name}</p>
        </div>
    )
}

export default Dashboard

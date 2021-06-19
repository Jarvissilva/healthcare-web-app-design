import styles from '../styles/pages/Home.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import BottomNav from '../components/BottomNav'
import Card from '../components/Card'

import { CgMenuRightAlt } from 'react-icons/cg'
import { RiSearchLine } from 'react-icons/ri'

const Home = () => {
  const [category, setCategory] = useState('All')
  const [gridLayout, setgridLayout] = useState(true)
  const router = useRouter()
  return (
    <div className='screen'>
      <div className={`row ${styles.header}`}>
        <div className={`row ${styles.hLogo}`}>
          <h1>Healtharo</h1>
        </div>
        <div className={`row ${styles.hBtn}`}>
          <CgMenuRightAlt size='37' color='var(--primary-color)' />
        </div>
      </div>
      <div className={`row ${styles.searchBar}`} style={{ background: '#fff' }}>
        <div className={`row ${styles.searchBox}`} onClick={() => router.push('/search')}>
          <div className={`row ${styles.sbIcon}`}>
            <RiSearchLine size='25' color='var(--primary-color)' />
          </div>
          <div className={`row ${styles.sbText}`}>
            <p>Search for anything</p>
          </div>
        </div>
      </div>
      <div className={`row ${styles.categorySec}`}>
        <CategoryBox name='All' category={category} setCategory={setCategory} />
        <CategoryBox name='Doctors' category={category} setCategory={setCategory} />
        <CategoryBox name='Hospitals' category={category} setCategory={setCategory} />
        <CategoryBox name='Dentists' category={category} setCategory={setCategory} />
        <CategoryBox name='Cardiologist' category={category} setCategory={setCategory} />
        <div className={styles.spacing}></div>
      </div>
      <div className={gridLayout === false ? `column ${styles.listCardSec}` : `row ${styles.gridCardSec}`}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <BottomNav name='home' />
    </div>
  )
}

const CategoryBox = props => {
  return (
    <div
      onClick={() => props.setCategory(props.name)}
      className={`row ${styles.categoryBox} ${props.category == props.name ? styles.activeCategory : ''}`}
    >
      <p>{props.name}</p>
    </div>
  )
}

export default Home

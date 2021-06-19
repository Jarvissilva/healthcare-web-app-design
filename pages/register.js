import styles from '../styles/pages/Auth.module.css'
import Link from 'next/link'
import { useState } from 'react'

import { FaRegUser } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { RiDoorLockLine } from 'react-icons/ri'
import { GrMapLocation } from 'react-icons/gr'

import * as fetch from '../helpers/fetch'

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', state: '' })
    const handleSubmit = async e => {
        e.preventDefault()
        const res = await fetch.post('/user/account/register', formData)
        console.log(res)
    }
    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className={`row ${styles.logo}`}>
                <h1>Health<span style={{ color: 'rgb(39, 178, 233)' }}>aro</span></h1>
            </div>
            <div className={`row ${styles.form}`}>
                <form className={`column`} onSubmit={handleSubmit}>
                    <div className={`row ${styles.inputBox}`}>
                        <div className={`row ${styles.inputIcon}`}>
                            <FaRegUser size={20} />
                        </div>
                        <input name='name' type="text" required onChange={handleChange} placeholder='Enter your full name' />
                    </div>
                    <div className={`row ${styles.inputBox}`}>
                        <div className={`row ${styles.inputIcon}`}>
                            <HiOutlineMail size={20} />
                        </div>
                        <input name='email' type="email" required onChange={handleChange} placeholder='Enter your email' />
                    </div>
                    <div className={`row ${styles.inputBox}`}>
                        <div className={`row ${styles.inputIcon}`}>
                            <GrMapLocation size={20} />
                        </div>
                        <input name='state' type="text" required onChange={handleChange} placeholder='Select your state' />
                    </div>
                    <div className={`row ${styles.inputBox}`}>
                        <div className={`row ${styles.inputIcon}`}>
                            <RiDoorLockLine size={20} />
                        </div>
                        <input name='password' type="password" required onChange={handleChange} placeholder='Enter a password' />
                    </div>
                    <div className={`row ${styles.submitBtn}`}>
                        <button type='submit'>Create Account</button>
                    </div>
                    <div className={`row ${styles.bottomText}`}>
                        <p>Already have a account ? <Link href='/login'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register

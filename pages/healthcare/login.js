import styles from '../../styles/pages/Auth.module.css'
import Link from 'next/link'
import { useState } from 'react'

import { HiOutlineMail } from 'react-icons/hi'
import { RiDoorLockLine } from 'react-icons/ri'

import * as fetch from '../../helpers/fetch'

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const handleSubmit = async e => {
        e.preventDefault()
        const res = await fetch.post('/healthcare/account/login', formData)
        console.log(res)
    }
    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className={`row ${styles.logo} ${styles.loginLogo}`}>
                <h1>Health<span style={{ color: 'rgb(39, 178, 233)' }}>aro</span></h1>
            </div>
            <div className={`row ${styles.form} ${styles.loginForm}`}>
                <form className={`column`} onSubmit={handleSubmit}>
                    <div className={`row ${styles.inputBox}`}>
                        <div className={`row ${styles.inputIcon}`}>
                            <HiOutlineMail size={20} />
                        </div>
                        <input name='email' required onChange={handleChange} type="email" placeholder='Enter your email' />
                    </div>
                    <div className={`row ${styles.inputBox}`}>
                        <div className={`row ${styles.inputIcon}`}>
                            <RiDoorLockLine size={20} />
                        </div>
                        <input name='password' required onChange={handleChange} type="password" placeholder='Enter a password' />
                    </div>
                    <div className={`row ${styles.submitBtn}`}>
                        <button>Login Now</button>
                    </div>
                    <div className={`row ${styles.bottomText}`}>
                        <p>Don't have a account ? <Link href='/healthcare/register'>Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login

import styles from '../styles/pages/Auth.module.css'
import Link from 'next/link'

import { HiOutlineMail } from 'react-icons/hi'
import { RiDoorLockLine } from 'react-icons/ri'

const Login = () => {
    return (
        <div>
            <div className={`row ${styles.logo} ${styles.loginLogo}`}>
                <h1>Health<span style={{ color: 'rgb(39, 178, 233)' }}>aro</span></h1>
            </div>
            <div className={`row ${styles.form} ${styles.loginForm}`}>
                <form className={`column`}>
                    <div className={`row ${styles.inputBox}`}>
                        <div className={`row ${styles.inputIcon}`}>
                            <HiOutlineMail size={20} />
                        </div>
                        <input type="text" placeholder='Enter your email' />
                    </div>
                    <div className={`row ${styles.inputBox}`}>
                        <div className={`row ${styles.inputIcon}`}>
                            <RiDoorLockLine size={20} />
                        </div>
                        <input type="password" placeholder='Enter a password' />
                    </div>
                    <div className={`row ${styles.submitBtn}`}>
                        <button>Login Now</button>
                    </div>
                    <div className={`row ${styles.bottomText}`}>
                        <p>Don't have a account ? <Link href='/register'>Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login

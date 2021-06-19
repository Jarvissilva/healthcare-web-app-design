import styles from '../../styles/pages/Auth.module.css'
import { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'

const Register = () => {
    const steps = {
        one: { title: 'Enter Healthcare Details', name: 1 },
        two: { title: 'Enter Healthcare Address', name: 2 },
        three: { title: 'Select Your Services', name: 3 },
        four: { title: 'Enter Healhcare Credentials', name: 4 },
    }
    const [step, setStep] = useState(steps.one.name)
    return (
        <div>
            <div className={`row ${styles.hcHeader}`}>
                {step === 1 ? null : <BiArrowBack size={30} onClick={() => setStep(step - 1)} />}
            </div>
            <div className={`row ${styles.hcHeading}`}>
                {step === 1 ? <h2>{steps.one.title}</h2> : null}
                {step === 2 ? <h2>{steps.two.title}</h2> : null}
                {step === 3 ? <h2>{steps.three.title}</h2> : null}
                {step === 4 ? <h2>{steps.four.title}</h2> : null}
            </div>
            <div className={`column ${styles.hcRegisterForm}`}>
                <form className={`column`}>
                    {step === 1 ? <div className={`column ${styles.sec1}`}>
                        <div className={`row ${styles.hcInput}`}>
                            <input type="text" name='name' placeholder='Name' required />
                        </div>
                        <div className={`row ${styles.hcInput}`}>
                            <select name="category" defaultValue='category'>
                                <option value="category">Category</option>
                                <option value="">Public Health Center</option>
                                <option value="">Clinic</option>
                                <option value="">Diagnostic Center</option>
                                <option value="">Hospital</option>
                                <option value="">Nursing Home</option>
                                <option value="">General Physician</option>
                            </select>
                        </div>
                        <div className={`row ${styles.hcInput}`}>
                            <select name="Legalentitytype">
                                <option value="title">Legal entity type</option>
                                <option value="individual">Private</option>
                                <option value="organisation">Public</option>
                            </select>
                        </div>
                        <div className={`row ${styles.hcInput}`}>
                            <select name="accountType">
                                <option value="title">Healthcare type</option>
                                <option value="individual">Individual</option>
                                <option value="organisation">Organisation</option>
                            </select>
                        </div>
                        <div className={`row ${styles.hcNextBtn}`}>
                            <button onClick={() => setStep(steps.two.name)}>Next</button>
                        </div>
                    </div> : null}

                    {step === 2 ? <div className={`column ${styles.sec2}`}>
                        <div className={`row ${styles.hcInput}`}>
                            <input type="text" name='address' placeholder='Full address' required />
                        </div>
                        <div className={`row ${styles.hcInput}`}>
                            <input type="text" name='country' placeholder='Country' required />
                        </div>
                        <div className={`row ${styles.hcInput}`}>
                            <input type="text" name='state' placeholder='State' required />
                        </div>
                        <div className={`row ${styles.hcInput}`}>
                            <input type="text" name='pincode' placeholder='Pincode' required />
                        </div>
                        <div className={`row ${styles.hcInput}`}>
                            <input type="text" name='city' placeholder='City' required />
                        </div>
                        <div className={`row ${styles.hcNextBtn}`}>
                            <button onClick={() => setStep(steps.three.name)}>Next</button>
                        </div>
                    </div> : null}

                    {step === 3 ? <div className={`column ${styles.sec3}`}>
                        <div className={`row ${styles.hcInput}`}>
                            <select name="accountType" multiple >
                                <option value="title" disabled selected>Choose Services you Provide</option>
                                <option value="">Public Health Center</option>
                                <option value="">Clinic</option>
                                <option value="">Diagnostic Center</option>
                                <option value="">Hospital</option>
                                <option value="">Nursing Home</option>
                                <option value="">General Physician</option>
                            </select>
                        </div>
                        <div className={`row ${styles.hcNextBtn}`}>
                            <button onClick={() => setStep(steps.four.name)}>Next</button>
                        </div>
                    </div> : null}

                    {step === 4 ? <div className={`column ${styles.sec4}`}>
                        <div className={`row ${styles.hcInput}`}>
                            <input type="email" name='email' placeholder='Email' required />
                        </div>
                        <div className={`row ${styles.hcInput}`}>
                            <input type="password" name='password' placeholder='Password' required />
                        </div>
                        <div className={`row ${styles.hcNextBtn}`}>
                            <button>Create Account</button>
                        </div>
                    </div> : null}
                </form>
            </div>

        </div>
    )
}

export default Register
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as fetch from '../../../helpers/fetch'

const VerifyEmail = () => {
    const [IsVerified, setIsVerified] = useState(false)
    const router = useRouter()
    const { id } = router.query
    const verify = async () => {
        const res = await fetch.post('/healthcare/account/verify-email', { id })
        if (res.status) {
            setIsVerified(true)
            router.push('/')
        }
    }
    verify()
    return (
        <div>
            {!IsVerified ? <h1>Verifying please wait</h1> : <h1>Verified succesfully you are redirected</h1>}
        </div>
    )
}

export default VerifyEmail

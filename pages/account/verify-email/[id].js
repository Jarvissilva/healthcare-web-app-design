import { useRouter } from 'next/router'
import { useState } from 'react'
import * as fetch from '../../../helpers/fetch'

const VerifyEmail = () => {
    const [IsVerified, setIsVerified] = useState(false)
    const router = useRouter()
    const { id } = router.query
    const verify = async () => {
        const res = await fetch.post('/user/account/verify-email', { id })
        if (res.status) {
            setIsVerified(true)
            router.push('/')
        }
    }
    verify()
    return (
        <div>
            <h1>Verifying please wait</h1>
        </div>
    )
}

export default VerifyEmail

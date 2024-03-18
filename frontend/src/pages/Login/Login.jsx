import { useNavigate } from 'react-router-dom'

import styles from './Login.module.css'
import Button from '@/components/Button/Button.jsx'

function Login() {
    const navigate = useNavigate()

    return (
        <>
            <p className={styles.title}>Who are you?</p>
            <div className={styles.loginBox}>
                <div className={styles.fieldWrapper}>
                    <input className={styles.usernameInput} type={'text'} />

                    <Button text={'Get Snazzy'} handleClick={() => navigate('/chat')} />
                </div>
            </div>
        </>
    )
}

export default Login

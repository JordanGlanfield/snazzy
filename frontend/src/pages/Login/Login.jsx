import { useNavigate } from 'react-router-dom'

import styles from './Login.module.css'
import Button from '@/components/Button/Button.jsx'

export function Login() {
    const navigate = useNavigate()

    return (
        <>
            <p className={styles.title}><span className={styles.pink}>Who are</span> <span className={styles.yellow}>you?</span></p>
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

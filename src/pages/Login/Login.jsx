import styles from './Login.module.css'
import Button from '@/components/Button/Button.jsx'

function Login() {
    return (<>
        <p className={styles.title}>
            Who are you?
        </p>
        <div className={styles.loginBox}>
            <div className={styles.fieldWrapper}>
                <input type={'text'} />

                <Button text={'Get Snazzy'} />
            </div>
        </div>
    </>)
}

export default Login
import { Link } from 'react-router-dom'

import styles from './TopBar.module.css'

function TopBar() {
    return (
        <div className={styles.wrapper}>
            <Link className={styles.title} to="/">
                <span className={styles.pink}>SnA</span>
                <span className={styles.yellow}>ZzY</span>
            </Link>
        </div>
    )
}

export default TopBar

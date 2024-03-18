import styles from './TopBar.module.css'

function TopBar() {
    return (<div className={ styles.wrapper }>
        <span className={ styles.title }>
            Snazzy
        </span>
    </div>)
}

export default TopBar
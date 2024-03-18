import PropTypes from 'prop-types'

import styles from './Button.module.css'

function Button({ text, handleClick }) {
    return (
        <>
            <button className={styles.button} onClick={handleClick}>{text}</button>
        </>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    handleClick: PropTypes.func
}

export default Button

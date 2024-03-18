import PropTypes from 'prop-types'

import styles from './Message.module.css'

function toClassName(conditionalClasses) {
    return Object.entries(conditionalClasses)
        .filter(([, enabled]) => enabled)
        .map(([className]) => className)
        .join(' ')
}

function Message({ message }) {
    const yourMessage = message.userId === 1

    return (
        <>
            <div className={toClassName({
                [styles.section]: true,
                [styles.yourMessageSection]: yourMessage,
                [styles.theirMessageSection]: !yourMessage,
            })}>
                <div
                    className={toClassName({
                        [styles.messageWrapper]: true,
                        [styles.yourMessageWrapper]: yourMessage,
                        [styles.theirMessageWrapper]: !yourMessage,
                    })}>
                    {message.text}
                </div>
            </div>
        </>
    )
}

Message.propTypes = {
    message: PropTypes.object
}

export default Message

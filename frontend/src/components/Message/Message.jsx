import PropTypes from 'prop-types'

import styles from './Message.module.css'

// TODO - add tests
function toClassName(...classes) {
    function conditionalClassesToClassName(conditionalClasses) {
        return Object.entries(conditionalClasses)
            .filter(([, enabled]) => enabled)
            .map(([className]) => className)
            .join(' ')
    }

    if (classes.length === 1 && typeof classes[0] === 'object') {
        return conditionalClassesToClassName(classes[0])
    } else {
        return classes.join(' ')
    }
}

export function Message({ message }) {
    const yourMessage = message.userId === 1

    let stylePrefix = yourMessage ? 'your' : 'their'

    return (
        <>
            <div className={toClassName(styles.section, styles[`${stylePrefix}MessageSection`])}>
                <div className={toClassName(styles.messageWrapper, styles[`${stylePrefix}MessageWrapper`])}>
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

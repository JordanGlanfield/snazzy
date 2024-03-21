import { useShallow } from 'zustand/react/shallow'

import styles from './Chat.module.css'
import colours from '@/styles/colours.module.css'
import { useChatStore } from '@/stores/chat.js'
import Message from '@/components/Message/Message.jsx'

function Chat() {
    const { messages, fetchMessages } = useChatStore(
        useShallow((state) => ({ messages: state.messages, fetchMessages: state.fetchMessages }))
    )

    fetchMessages(1, 2)

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.chatContainer}>
                    {messages.map((message) => (
                        <Message key={message.text} message={message} />
                    ))}
                </div>
                <div className={styles.inputPanel}>
                    <textarea className={`${styles.chatTextArea} ${colours.yellowBorder}`} />
                </div>
            </div>
        </>
    )
}

export default Chat

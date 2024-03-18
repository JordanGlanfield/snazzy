import { useShallow } from 'zustand/react/shallow'

import styles from './Chat.module.css'
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
                {messages.map((message) => (
                    <Message key={message.text} message={message} />
                ))}
            </div>
        </>
    )
}

export default Chat

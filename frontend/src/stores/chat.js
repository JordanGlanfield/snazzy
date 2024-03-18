import { create } from 'zustand'
import mockMessages from './mockMessages.json'

export const useChatStore = create((set, get) => ({
    messages: [],
    fetchMessages: async (userId1, userId2) => {
        set({ messages: mockMessages })
    }
}))
import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const MessageContext = createContext({
    messages:[],
    addMessage: () => {},
    isModalOpen: false,
    toggleIsModalOpen: () => {},
    removeMessage: () => {},
    isGifSearchOpen: false,
    toggleIsGifSearchOpen: () => {}
});

export const MessageProvider = ({children}) => {
    /* const initialMessages = [
        {id:1, message:"Hello! Anyone there?......................................................."},
        {id:2, message:"second message"}
    ] ; */

    const initialMessages = JSON.parse(window.localStorage.getItem("messages") || "[]");
    const [messages, setMessages] = useState(initialMessages);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isGifSearchOpen, setIsGifSearchOpen] = useState(false);

    useEffect(()=>{
        window.localStorage.setItem("messages",JSON.stringify(messages));
    },[messages]);

    const toggleIsModalOpen = (bool) => {
        setIsModalOpen(bool);
    }

    const toggleIsGifSearchOpen = (bool) => {
        setIsGifSearchOpen(bool);
    }

    const addMessage = (newMessage) => {
        setMessages([...messages, { id: uuidv4(), message: newMessage }]);
    };

    const removeMessage = (id) => {
        const updatedMessages = messages.filter(message => message.id !== id);
        setMessages(updatedMessages);
    }

    const value = {messages, addMessage, isModalOpen, toggleIsModalOpen, removeMessage, isGifSearchOpen, toggleIsGifSearchOpen}
    return (
        <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
    );
}
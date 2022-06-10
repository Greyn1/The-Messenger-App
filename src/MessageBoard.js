import { useContext } from "react";
import { MessageContext } from "./contexts/MessageContext";
import MessageCard from "./MessageCard";
import './MessageBoard.scss';

const MessageBoard = () => {
    const {messages} = useContext(MessageContext);
    var messagesReversed = [...messages].reverse();
    return(
        <div className="message-board-container">
            {
                messages.length ? messagesReversed.map((messageItem) => <MessageCard key={messageItem.id} messageItem={messageItem} />) 
                :
                <h1>No Messages To Display</h1>
            }
        </div>
    );
}

export default MessageBoard;
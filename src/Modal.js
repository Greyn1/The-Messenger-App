import { useContext, useState } from "react";
import { MessageContext } from "./contexts/MessageContext";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';
import GifSearch from "./GifSearch";
import './Modal.scss';

const Modal = () => {
    const { isModalOpen, toggleIsModalOpen, addMessage, isGifSearchOpen, toggleIsGifSearchOpen } = useContext(MessageContext);
    const [newMessage, setNewMessage] = useState("");

    const handleClose = () => {
        toggleIsModalOpen(!isModalOpen);
    }

    const handleChange = (evt) => {
        setNewMessage(evt.target.value);
    }

    const handleGifOpen = () => {
        toggleIsGifSearchOpen(!isGifSearchOpen);
    }

    const reset = () => {
        setNewMessage("");
    }

    return (
        <>
            <div className="darkBG" onClick={handleClose} />
                <div className="centered">
                    <div className="modal">
                        <span className="closeBtn">
                            <IconButton onClick={handleClose}>
                                <HighlightOffIcon />
                            </IconButton>
                        </span>
                        <div className="modalHeader">
                            <span className="modal-heading">Post a Message</span>
                        </div>
                        <div className="modalContent">
                            <form onSubmit={(e)=>{
                                            e.preventDefault();
                                            addMessage(newMessage);
                                            reset();
                                            }} >
                                        <textarea type="text" 
                                                name="newMessage" 
                                                value={newMessage} 
                                                onChange={handleChange}
                                                placeholder="Share your Thoughts.."
                                                required
                                                maxLength="300"
                                                rows="7" />
                                        <div className="form-button-container">
                                            <button className="cancelBtn" onClick={handleGifOpen}>Add GIFs</button>
                                            <button type="submit" className="cancelBtn">
                                                Post
                                            </button>
                                        </div>
                            </form>
                        </div>
                </div>
                {isGifSearchOpen && <GifSearch />}
            </div>
        </>
    );
}

export default Modal;
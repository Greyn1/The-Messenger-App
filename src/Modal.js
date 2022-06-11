import { useContext, useState } from "react";
import { MessageContext } from "./contexts/MessageContext";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';
import GifSearch from "./GifSearch";
import './Modal.scss';

const Modal = () => {
    const { isModalOpen, toggleIsModalOpen, addMessage, isGifSearchOpen, toggleIsGifSearchOpen, gifUrl, handleSetGifUrl } = useContext(MessageContext);
    const [newMessage, setNewMessage] = useState("");

    const handleClose = () => {
        toggleIsModalOpen(!isModalOpen);
        handleSetGifUrl("");
    }

    const handleChange = (evt) => {
        setNewMessage(evt.target.value);
    }

    const handleGifOpen = () => {
        toggleIsGifSearchOpen(!isGifSearchOpen);
    }

    const reset = () => {
        setNewMessage("");
        handleSetGifUrl("");
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
                                            addMessage(newMessage, gifUrl);
                                            reset();
                                            }} >
                                       <div className="input-container">
                                            <textarea type="text" 
                                                        name="newMessage" 
                                                        value={newMessage} 
                                                        onChange={handleChange}
                                                        placeholder="Share your Thoughts.."
                                                        required
                                                        maxLength="300"
                                                        rows="3"
                                                        />
                                            {gifUrl && <img src={gifUrl} className="form-gif" />}
                                       </div>
                                        <div className="form-button-container">
                                            <button type="button" className="cancelBtn" onClick={handleGifOpen}>Add GIFs</button>
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
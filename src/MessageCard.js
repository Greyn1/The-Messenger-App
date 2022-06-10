import { useContext } from 'react';
import { MessageContext } from './contexts/MessageContext';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import Img from './defaultImg2.png';
import './MessageCard.scss';

const MessageCard = ({messageItem}) => {
    const {message, id} = messageItem;
    const {removeMessage} = useContext(MessageContext);

    const handleClick = () => {
        removeMessage(id);
    }
    return(
        <div className='message-card-container'>
            <div>
                <Avatar src={`${Img}`} sx={{ width: 30, height: 30 }} />
            </div>
            <div className='messageBubble'>
                {message}
                <div className='delete-button-container'>
                        <DeleteIcon className='deleteIcon' fontSize="small" onClick={handleClick}/>
                </div>
            </div>
        </div>
    );
}

export default MessageCard;
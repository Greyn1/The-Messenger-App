/* import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip'; */
import { useContext } from "react";
import { MessageContext } from "./contexts/MessageContext";
import Modal from "./Modal";
import Img from './defaultImg2.png';
import './TopBanner.css';

const TopBanner = () => {
    const { isModalOpen, toggleIsModalOpen } = useContext(MessageContext);

    const handleClick = () => {
        toggleIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <div className='topBanner-container'>
                <div className='heading'>
                    <span className='heading-1'>THE</span>
                    <span>MESSENGER</span>
                </div>
                <div className='img-button-container'>
                    <span className='img-container'>
                        <img src={`${Img}`} />
                    </span>
                    {/* <Button variant="outlined">Whats on your mind...</Button> */}
                    <button className="chip" onClick={handleClick}>Whats on your mind...</button>
                </div>
            </div>
            {isModalOpen && <Modal />}
        </>
    );
}

export default TopBanner;

// variant="outlined" color="secondary"
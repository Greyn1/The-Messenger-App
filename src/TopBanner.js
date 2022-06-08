import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import './TopBanner.css';
import Img from './defaultImg2.png';

const TopBanner = () => {
    return (
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
                <Button className="chip" variant="outlined" color="secondary">Whats on your mind...</Button>
            </div>
        </div>
    );
}

export default TopBanner;
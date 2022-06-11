import { useContext, useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { MessageContext } from "./contexts/MessageContext";
import axios from "axios";
import './GifSearch.scss';

const API_Key = "2YG7Z6hz09v3FBao6v5OPZ5hZq2BYMyg";

const GifSearch = () => {
    const {isGifSearchOpen, toggleIsGifSearchOpen, handleSetGifUrl} = useContext(MessageContext);
    const [gifData, setGifData] = useState([]);
    const [searchString, setSearchString] = useState("");

    const handleChange = (evt) => {
        setSearchString(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const results = await axios("https://api.giphy.com/v1/gifs/search",{
            params:{
                api_key: API_Key,
                q:searchString,
                limit:8
            }
        });
        setGifData(results.data.data);
        setSearchString("");
    }

    const handleClose = () => {
        toggleIsGifSearchOpen(!isGifSearchOpen);
    }

    const handleClick = (e) => {
        handleSetGifUrl(e.target.src)
    }

    const displayGif = () => {
        return gifData.map((gifItem) => {
            return (
                <div className="gifs">
                    <img src={gifItem.images.fixed_height.url} onClick={handleClick} />
                </div>
            )
        })
    } 


    return (
        <div className="gif-search-container">
            <div className="header-container">
                <span>
                <HighlightOffIcon fontSize="small" onClick={handleClose}/>
                </span>
                <form>
                    <input className="searchBar" 
                            type="text" 
                            name="searchString" 
                            placeholder="Search Gifs!"
                            value={searchString} 
                            onChange={handleChange} 
                            required />
                    <button className="searchBtn" onClick={handleSubmit} type="submit">Search</button>
                </form>
            </div>
            <div className="gif-container">
               {displayGif()}
            </div>
        </div>
    );
}

export default GifSearch;
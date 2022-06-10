import { useContext, useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { MessageContext } from "./contexts/MessageContext";
import axios from "axios";
import './GifSearch.scss';

const API_Key = "2YG7Z6hz09v3FBao6v5OPZ5hZq2BYMyg";

const GifSearch = () => {
    const {isGifSearchOpen, toggleIsGifSearchOpen} = useContext(MessageContext);
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

    const displayGif = () => {
        return gifData.map((gifItem) => {
            return (
                <div className="gifs">
                    <img src={gifItem.images.fixed_height.url} />
                </div>
            )
        })
    } 


    return (
        <div className="gif-search-container">
            <span>
            <HighlightOffIcon fontSize="small" onClick={handleClose} />
            </span>
            <form>
                <input type="text" name="searchString" value={searchString} onChange={handleChange} required />
                <button onClick={handleSubmit} type="submit">Search</button>
            </form>
            <div className="gif-container">
               {displayGif()}
            </div>
        </div>
    );
}

export default GifSearch;
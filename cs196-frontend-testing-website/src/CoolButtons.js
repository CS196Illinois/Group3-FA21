import React from 'react'
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import './Style.css';


const CoolButtons = () => {
    return (
        <div className = "coolButtons">
            <IconButton className = "coolButtons__repeat">
              <ReplayIcon fontSize = "large" />
            </IconButton>

            <IconButton className = "coolButtons__left">
              <CloseIcon fontSize = "large" />   
            </IconButton>

            <IconButton className ="coolButtons__star">
              <StarRateIcon fontSize ="large" />   
            </IconButton>

            <IconButton className="coolButtons__right">
              <FavoriteIcon fontSize="large" />   
            </IconButton>

            <IconButton className = "coolButtons__lightning">
              <FlashOnIcon fontSize = "large" />   
            </IconButton>

        </div>
    )
}

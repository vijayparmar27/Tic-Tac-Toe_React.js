import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const MessagePopup = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(true);
    const id ='simple-popover'

  return (
  <>
  <div>
      <Popover
        id={id}
        open={open}

        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  </>);
};

export default MessagePopup;

import React from 'react';
import { useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import PopupModal from './PopupModal';
// src/index.js



const PropertyCard = ({ name, price }) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

  return (
    <div className="property-card">
      <h2>Property Name: {name}</h2>
      <p>Property Price: {price}</p>
      <Button onClick={handleOpen}>Validate</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <PopupModal />
  </Box>
</Modal>
    </div>
  );
}

export default PropertyCard;

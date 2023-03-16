import { Button, Popover, Typography, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import React, { useState } from 'react';

interface PopoverProps {
  message: string;
}

export const InfoPopover: React.FC<PopoverProps> = ({ message }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ alignSelf: 'center', position: 'absolute', transform: 'translate(580%, -0%)' }}>
      <Button onClick={handleClick}>
        <InfoIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
      >
        <Typography sx={{ p: 2 }}>{message}</Typography>
      </Popover>
    </Box>
  );
};

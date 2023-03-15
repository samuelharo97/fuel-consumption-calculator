import { Tooltip, IconButton, Button, Popover, Typography, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import { useState } from 'react';

interface PopoverProps {
  message: string;
}

export const InfoPopover: React.FC<PopoverProps> = ({ message, ...props }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // transform: 'translate(-50%, -50%)',

  return (
    <Box sx={{ alignSelf: 'center', transform: 'translate(40%, -30%)' }}>
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

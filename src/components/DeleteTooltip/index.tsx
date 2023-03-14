import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import type React from 'react';

interface DeleteProps {
  removeRow: () => void;
}

export const DeleteTooltip: React.FC<DeleteProps> = ({ removeRow }) => {
  return (
    <Tooltip onClick={removeRow} title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

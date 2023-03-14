import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import type React from 'react';

interface EditProps {
  editRow: () => void;
}

export const EditTooltip: React.FC<EditProps> = ({ editRow }) => {
  return (
    <Tooltip onClick={editRow} title="Edit">
      <IconButton>
        <EditIcon />
      </IconButton>
    </Tooltip>
  );
};

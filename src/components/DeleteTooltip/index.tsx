import { Tooltip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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

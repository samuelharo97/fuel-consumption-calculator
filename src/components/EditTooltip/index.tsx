import { Tooltip, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

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

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const MyButton = () => {
  return (
    <Button component={Link} to="/calculate" variant="contained" color="primary">
      Go to My Page
    </Button>
  );
};

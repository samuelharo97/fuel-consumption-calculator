import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const MyButton = (): any => {
  return (
    <Link component={RouterLink} to="/calculate" color="primary">
      Go to My Page
    </Link>
  );
};

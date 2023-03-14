import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Form } from './components/Form';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}.
//     </Typography>
//   );
// }

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Create React App example with styled-components in
          TypeScript
        </Typography>
        {/* <Copyright /> */}
      </Box>
      <FolightThemerm></FolightThemerm>
    </Container>
  );
}

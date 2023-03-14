import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { RouterProvider } from 'react-router-dom';
import { HeaderSidebar } from './components/Header';
import { AppRoutes } from './routes/app-routes';

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

export default function App(): any {
  return (
    <>
      <HeaderSidebar />
      <Container maxWidth="lg">
        <Box sx={{ my: 24 }}>
          {/* <Typography variant="h1" component="h1" gutterBottom></Typography> */}
          <RouterProvider router={AppRoutes}></RouterProvider>
        </Box>
      </Container>
    </>
  );
}

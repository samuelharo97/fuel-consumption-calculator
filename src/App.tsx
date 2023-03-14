import { ThemeProvider } from 'styled-components';
import { Form, HeaderSidebar as Header } from './components';
import './App.css';
import { MyButton } from './components/Button';

function App() {
  return (
    <>
      <MyButton></MyButton>
      <Header />
      <Form />
    </>
  );
}

export default App;

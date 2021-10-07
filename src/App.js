import { ChakraProvider } from '@chakra-ui/react';
import { Home } from './pages/Home';
import { themeProvider } from './theme';

function App() {
  return (
    <ChakraProvider theme={themeProvider}>
      <Home />
    </ChakraProvider>
  );
}

export default App;

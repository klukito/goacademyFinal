import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Main from 'components/main-page/main-page';


const App = () => (
  <ThemeProvider>
    <CSSReset />
    <Main />
  </ThemeProvider>
);
export default App;

import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { Home } from './pages/Home';

import GlobalStyle from './styles/global';
import { UserContextProvider } from './contexts/UserContext';

export function App() {
  const [theme, setTheme] = useState(light);

  function toogleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home toogleTheme={toogleTheme} />
      </ThemeProvider>
    </UserContextProvider>
  )
}

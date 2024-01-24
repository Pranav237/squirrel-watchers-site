import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about'; // Import the About component
import Gallery from './pages/gallery'; // Import the Gallery component
import theme from './themes/GreenTheme'; // Import the theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

// project import
import Routes from './routes';
import ThemeCustomization from './themes';
import ScrollTop from './components/ScrollTop';
import CssBaseline from '@mui/material/CssBaseline';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    <CssBaseline />
    <ScrollTop>
      <Routes />
    </ScrollTop>
  </ThemeCustomization>
);

export default App;

import 'styles/global/Global.css';
import 'styles/global/Timoideas.css';
import 'styles/global/Timoideas.min.css';
import { StoreContextProvider } from 'context/StoreContext';
import { Theme } from 'components/Resources/Timoideas';
import Navegacion from 'components/global/Navegacion';
import Home from 'components/Home';

const App = ({ Component, pageProps }) => {
  return (
    <StoreContextProvider>
      <Home />
      <Theme />
      <Navegacion />
      <Component {...pageProps} />
    </StoreContextProvider>
  );
};

export default App;

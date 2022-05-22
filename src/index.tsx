import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {GlobalStyle} from './components/global-styles';
import {setConfiguration} from 'react-grid-system';
import {routes} from './routes';
import {AppContextProvider} from './context';

setConfiguration({
  gridColumns: 12,
  breakpoints: [576, 768, 992, 1200, 1600, 1920],
  containerWidths: [540, 740, 960, 1140, 1540, 1810]
});

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <AppContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );

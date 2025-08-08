import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '@styles/main.scss';

import { theme } from './theme.js';
import { ThemeProvider } from '@mui/material/styles';

import { store } from './redux/store.js';
import { Provider } from 'react-redux';

// cấu hình redux-persist
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
const persistor = persistStore(store)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </ThemeProvider>
    </StrictMode>
);

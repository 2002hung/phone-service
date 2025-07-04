import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers';
import { ToastProvider } from '@contexts/ToastContext';

function App() {
    return (
        <ToastProvider>
            <BrowserRouter>
                <Suspense fallback={<div>loading...</div>}>
                    <Routes>
                        {routers.map((item, index) => (
                            <Route
                                key={index}
                                path={item.path}
                                element={<item.component />}
                            />
                        ))}
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </ToastProvider>
    );
}

export default App;

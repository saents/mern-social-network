import {useMemo} from 'react';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import {themeSettings} from './theme.js';

import Navbar from 'scenes/navbar';
import HomePage from 'scenes/home-page';
import LoginPage from 'scenes/login-page';
import ProfilePage from 'scenes/profile-page';

function App() {
    const mode = useSelector(state => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return (
        <div className="App">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route path={'/'} element={<LoginPage/>}/>
                        <Route path={'/home'} element={<HomePage/>}/>
                        <Route path={'/profile/:userId'} element={<ProfilePage/>}/>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;

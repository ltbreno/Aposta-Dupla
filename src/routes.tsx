import React from 'react' ;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/login';
import { Home } from './pages/Home/Home';
import { ForgetPassword } from './pages/ForgetPassword/ForgetPassword';

export const Rotas: React.FC = () => {
    return (
        <BrowserRouter>
    {/* ROUTES */}
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={ <Login/>} />
            <Route path='/forgetpassword' element={ <ForgetPassword/>} />
        </Routes>
    </BrowserRouter>
    )
}
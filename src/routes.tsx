import React from 'react' ;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/login';
import { Home } from './pages/Home/Home';
import { ForgetPassword } from './pages/ForgetPassword/ForgetPassword';
import { RegisterAccount } from './pages/RegisterAccount/RegisterAccount';
import { Logged } from './pages/Logged/Logged';
import { DepositPage } from './Components/DepositPage/DepositPage';

export const Rotas: React.FC = () => {
    return (
        <BrowserRouter>
    {/* ROUTES */}
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={ <Login/>} />
            <Route path='/forgetpassword' element={ <ForgetPassword/>} />
            <Route path='/registeraccount' element={ <RegisterAccount/>} />
            <Route path='/logged' element={ <Logged/>} />
            <Route path='/deposit' element={ <DepositPage/>} />
        </Routes>
    </BrowserRouter>
    )
}
import React from 'react' ;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/login';
import { Home } from './pages/Home/Home';
import { ForgetPassword } from './pages/ForgetPassword/ForgetPassword';
import { RegisterAccount } from './pages/RegisterAccount/RegisterAccount';
import { Logged } from './pages/Logged/Logged';
import { DepositPage } from './pages/DepositPage/DepositPage';
import { Pix } from './Components/PagePix/Pix';
import { AccountPage } from './pages/AccountPage/AccountPage';
import { AccountBalance } from './Components/AccountBalance/AccountBalance';
// import { CreditPayment } from './Components/CreditPayment/CreditPayment';
// import { DebitPayment } from './Components/DebitPayment/DebitPayment';
import { WithDraw } from './Components/WithDraw/WithDraw';




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
            <Route path='/pixpayment' element={ <Pix/>} />
            <Route path='/accountpage' element={ <AccountPage/> } />
            <Route path='/accountbalance' element={ <AccountBalance/> } />
            <Route path='/withdraw' element={ <WithDraw/> } />
        </Routes>
    </BrowserRouter>
    )
}
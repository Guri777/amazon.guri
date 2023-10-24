import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider, useSelector } from 'react-redux'
import store from './app/store.js'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Home } from './features/main/Home.jsx'
import { Detail } from './pages/Details/Detail.jsx'
import { Registration } from './pages/registeruser/Registration.jsx'
import { Login } from './pages/login/Login.jsx'
import { Categories } from './pages/categories/Categories.jsx'
import { ProtectedRoute } from './protectedroute/ProtectedRoute.jsx'
import { Cart } from './features/cart/Cart.jsx'
import { Account } from './pages/account/Account.jsx'
import { Buynow } from './pages/buynow/buynow.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
        
    

   <Provider store={store}>
       <BrowserRouter>
         <Header/>
           
            <Routes>
              
              <Route path='/' element={<Home/>}/>
             
              <Route path='/:id' element={<Detail/>}/>
              <Route path='/registration' element={<Registration/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/header/:id' element={<Categories/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/Buynow' element={<Buynow/>}/>
             
              <Route element={<ProtectedRoute/>}>
              <Route path='/Account' element={<Account/>}/>
             
              </Route>
              
            </Routes>
            <Footer/>
       </BrowserRouter>

   </Provider>
   
   
  // </React.StrictMode>,
)

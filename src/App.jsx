// import axios from 'axios'
// import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './assets/pages/Cart'
import Home from './assets/pages/Home'
import LoginScreen from './assets/pages/LoginScreen'
import ProductId from './assets/pages/ProductId'
import ProtectedRoutes from './assets/pages/ProtectedRoutes'
import Purchases from './assets/pages/Purchases'

function App() {



  //Solo se escribio para generar una cuenta
  // useEffect(() => {
  //   const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users`

  //   const data = {
  //     firstName: 'Pako',
  //     lastName: 'Cardenas',
  //     email: 'pakorro2@gmail.com',
  //     password: 'Pk123456',
  //     phone: '3121002378',
  //     role: 'admin'
  //   }

  //   axios.post(URL, data)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))

  // }, [])


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductId />} />
        <Route path='/login' element={<LoginScreen />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<Cart />} />
          <Route path='/purchases' element={<Purchases />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

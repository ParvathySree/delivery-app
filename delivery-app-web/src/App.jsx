import Shop from './components/GroceryBoard/Shop/Shop'
import { Provider } from 'react-redux'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import './App.css'
import GroceryBoard from './components/GroceryBoard/GroceryBoard'
import Home from './components/Home/Home'
import Login from './components/Home/Login/Login'
import SignUp from './components/Home/SignUp/SignUp'
import { store } from './redux/store'
import { getToken } from './utils/cookie-services/cookie'
import { useEffect, useState } from 'react'
import PrivateRoute from './utils/PrivateRoute/PrivateRoute'
import Cart from './components/GroceryBoard/Cart/Cart'

function App() {

   
  

  return (
    <>
      <Provider store={store}> 
      <Outlet />
    </Provider>      
    </>
  )
}



export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        children:[
          {
            path:'/',
            element:<Login/>,
          },
          {
            path:'/signup',
            element:<SignUp/>,
          },
        ]
      },
      {
        path:'/instacart',
        element:<PrivateRoute><GroceryBoard /></PrivateRoute>,
        children:[ {
          path:'/instacart/shop',
          element:<Shop/>,
        },
        {
          path:'/instacart/cart',
          element:<Cart/>,
        },]
      }

    ]
  }]
)

export default App

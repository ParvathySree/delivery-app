import { Provider } from 'react-redux'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Login from './components/Home/Login/Login'
import SignUp from './components/Home/SignUp/SignUp'
import { store } from './redux/store'

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
            path:'/login',
            element:<Login/>,
          },
          {
            path:'signup',
            element:<SignUp/>,
          },
        ]
      },

    ]
  }]
)

export default App

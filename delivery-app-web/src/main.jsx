import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { appRouter } from './App';
import { RouterProvider } from 'react-router-dom';
import './index.css'
import { Provider } from 'react-redux';
import {store} from './redux/store';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={appRouter}>
      <Provider store={store}>
      <App />
      </Provider>
      </RouterProvider>
  </React.StrictMode>,
)

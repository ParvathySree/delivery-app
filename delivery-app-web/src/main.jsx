import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { appRouter } from './App';
import { RouterProvider } from 'react-router-dom';
import './index.css'
import { store } from './redux/store';
import { Provider } from 'react-redux';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={appRouter}>
      <Provider store={store}>
      <App />
      </Provider>
      </RouterProvider>
  </React.StrictMode>,
)

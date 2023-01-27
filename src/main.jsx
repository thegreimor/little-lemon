import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookingPage from './pages/BookingPage'
import {action as newBookingAtion, loader as newBookingLoader} from './components/FormBook'
import BookingConfirm, {loader as bookingConfirmLoader} from './pages/BookingConfirm'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
  },
  {
    path: '/booking/:bookId/new',
    element: <BookingPage />,
    action: newBookingAtion,
    loader: newBookingLoader
  },
  {
    path: '/booking/confirm',
    element:<BookingConfirm />,
    loader: bookingConfirmLoader
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

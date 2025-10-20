import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from '@/pages/LandingPage'
import NotFoundPage from '@/pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <NotFoundPage />,
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}



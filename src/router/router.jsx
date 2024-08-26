import { createBrowserRouter } from 'react-router-dom'
import App from 'src/App'
import ErrorPage from 'src/components/ErrorPage'
import CPPT from 'src/pages/CPPT'
import FormIGD from 'src/pages/FormIGD'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/report/form-igd',
    element: <FormIGD />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/report/cppt',
    element: <CPPT />,
    errorElement: <ErrorPage />,
  },
])

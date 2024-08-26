import { createBrowserRouter } from 'react-router-dom'
import App from 'src/App'
import ErrorPage from 'src/components/ErrorPage'
import CPPT from 'src/pages/CPPT'
import FormIGD from 'src/pages/FormIGD'
import Triase from 'src/pages/Triase'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'report/',
    children: [
      {
        path: 'form-igd',
        element: <FormIGD />,
      },
      {
        path: 'cppt',
        element: <CPPT />,
      },
      {
        path: 'triase',
        element: <Triase />,
      },
    ],
    errorElement: <ErrorPage />,
  },
])

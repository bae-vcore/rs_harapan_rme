import { createBrowserRouter } from 'react-router-dom'
import App from 'src/App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <div className='min-h-screen w-full text-center flex justify-center items-start py-[250px]'>
        <p className='text-red-500'>Something Wrong</p>
      </div>
    ),
  },
])

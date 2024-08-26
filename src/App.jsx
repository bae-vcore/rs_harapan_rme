import Layout from './components/Layout'
import Logo from 'src/assets/images/logo_rs_harapan.png'

function App() {
  return (
    <Layout>
      <div className='flex justify-center items-center'>
        <div className='  py-[150px] text-center flex flex-col items-center'>
          <img
            src={Logo}
            alt='logo rs harapan'
            className='w-[150px] object-contain mb-4'
          />
          <h3 className='font-bold'>REKAM MEDIS ELEKTRONIK</h3>
        </div>
      </div>
    </Layout>
  )
}

export default App

import Logo from 'src/assets/images/logo_rs_harapan.png'
import { constants } from 'src/utils/constants'

const KopSurat = () => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <img
          src={Logo}
          className='w-[150px] object-contain pl-5'
          alt='logo rumah sakit harapan'
        />
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>{constants.hospitalName}</h1>
          <p className='font-medium'>{constants.contact.address}</p>
          <div className='flex gap-1 justify-center font-medium'>
            <p className='font-medium'>Telp.{constants.contact.telp};</p>
            <p>Fax. {constants.contact.fax}</p>
          </div>
          <div className='flex gap-1 font-medium'>
            <p>Email : {constants.contact.email}</p>
            <p>Website : {constants.contact.website}</p>
          </div>
        </div>
        <div />
      </div>
      <div className='h-1 bg-black mt-4' />
    </>
  )
}

export default KopSurat

import { formatBirthDay } from 'src/utils/formatTime'

const Pasien = ({ pasien, noRm, ruangan }) => {
  return (
    <div className='border border-black flex items-center'>
      <div className='w-full p-2 flex items-center '>
        <div className='mr-12'>
          <p>Nama Pasien</p>
          <p>Tanggal Lahir</p>
        </div>
        <div>
          <p>: {pasien?.nama} </p>
          <p>: {formatBirthDay(pasien?.tgl_lahir)}</p>
        </div>
      </div>
      <div className='w-full p-2  flex items-center'>
        <div className='mr-12'>
          <p>Nomor Rekam Medis</p>
          <p>Ruangan</p>
        </div>
        <div>
          <p>: {noRm}</p>
          <p>: {ruangan}</p>
        </div>
      </div>
    </div>
  )
}
export default Pasien

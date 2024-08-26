import dayjs from 'dayjs'

const PasienDetail = ({ title = 'title', pasien = {} }) => {
  return (
    <div className='border-l border-t border-r border-black mt-5'>
      <div className='flex items-center justify-center'>
        <div className='h-[150px] w-full flex justify-center items-center border-r border-black'>
          <div className='text-center font-bold text-xl'>{title}</div>
        </div>
        <div className='flex items-center justify-start h-[150px] w-full'>
          <div className='pl-4 flex gap-5'>
            <div>
              <p>Nama Pasien</p>
              <p>Tanggal Lahir</p>
              <p>Nomor Rekam Medis</p>
            </div>
            <div>
              <p>: {pasien?.nama}</p>
              <p>: {dayjs(pasien?.tgl_lahir).format('YYYY-MM-DD')}</p>
              <p>: {pasien?.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasienDetail

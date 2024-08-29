import clsx from 'clsx'
import QRCode from 'react-qr-code'
import { formatDateWithTime } from 'src/utils/formatTime'

const TabelLaporan = ({ isHead = false, item = {} }) => {
  return (
    <div className={clsx('border border-black', isHead && 'mt-4')}>
      {/* Table Head */}
      {isHead && (
        <div className='flex justify-center items-start'>
          <div className='flex-[0.3] w-full border-b border-black h-[100px] flex justify-center items-center'>
            <p className='font-medium text-lg'>Tgl/Jam</p>
            <br />
          </div>
          <div className=' flex flex-1 w-full border-x border-b border-black  h-[100px] justify-center items-center text-center'>
            <p className='font-medium text-lg text-center'>
              Berikan catatan perawat :<br />
              Terapi Keperawatan, Observasi, Keperawatan, Penyuluh Kesehatan,
              Kolaborasi
            </p>
            <p className='font-medium'></p>
          </div>
          <div className='flex flex-[0.3] w-full border-b border-black h-[100px] items-center justify-center'>
            <p className='font-medium text-lg text-center'>Nama Perawat</p>
            <br />
            <p></p>
          </div>
        </div>
      )}
      {/* Table Head */}
      <div className='min-h-[100px] flex '>
        <div className='flex flex-[0.3] w-full'>
          <div className='p-2 w-full flex justify-center items-center'>
            <p className='text-center'>
              {formatDateWithTime(item?.insert_dttm)}
            </p>
          </div>
        </div>
        <div className='flex flex-col flex-1 w-full border-x border-black'>
          <div className='p-2'>
            {item?.siki?.map((i) => (
              <div
                key={i.id_siki}
                className='items-center justify-start gap-2 list-item ml-4'
              >
                <div className='flex items-center gap-2'>
                  <div className='min-w-[70px]'>
                    <p className='text-sm'>{i.kategori}</p>
                  </div>
                  <div>
                    <p className='text-sm'>: {i.nama_siki}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='p-2'>
            <p className='mb-1 font-medium'>Tindakan</p>
            {item?.tindakan?.map((i, index) => (
              <div
                key={index}
                className='flex items-center justify-start gap-2'
              >
                <p className='text-sm'>
                  {formatDateWithTime(i.insert_dttm)} - {i.deskripsi}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-[0.3] w-full'>
          <div className='p-2 w-full flex flex-col justify-center items-center gap-4'>
            <QRCode value={item?.nama_perawat} className='h-[80px] w-[80px]' />
            <p className='text-center'>{item?.nama_perawat}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TabelLaporan

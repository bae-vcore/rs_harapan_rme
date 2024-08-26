import dayjs from 'dayjs'
import React from 'react'
import QRCode from 'react-qr-code'

const Tabel = ({ data = [] }) => {
  return (
    <>
      <div className='border border-black flex mt-4'>
        <div className='border-r border-black flex-[0.3] flex justify-center items-center'>
          <p className='text-center p-2 text-sm font-medium'>Tanggal & Jam</p>
        </div>
        <div className='border-r border-black flex-[0.4] flex items-center justify-center'>
          <p className='text-center p-2 text-sm font-medium'>
            Professional Pemberi Asuhan
          </p>
        </div>
        <div className='border-r border-black flex-1'>
          <p className='text-center p-2 text-sm font-medium pt-5'>
            Hasil Asesmen - IAR Penatalaksanaan Pasien (Tulis dengan format
            SOAP/ADMIE, diesetai Sasaran. Tulis nama, beri paraf pada akhir
            catatan)
          </p>
        </div>
        <div className='border-r border-black flex-[0.5] flex items-center justify-center'>
          <p className='text-center p-2 text-sm font-medium pt-5'>
            Instruksi PPA Termasuk Pasca Bedah (Instruksi ditulis dengan rinci
            dan jelas)
          </p>
        </div>
        <div className='flex-[0.5] flex justify-center items-center'>
          <p className='text-center p-2 text-sm font-medium'>
            Verifikasi DPJP (Tulis Nama, beri paraf, Tgl, Jam) (DPJP harus
            membaca/meriview seluruh rencana asuhan)
          </p>
        </div>
      </div>
      {data.map((item, index) => (
        <React.Fragment key={`table-cppt-${index}`}>
          <div className='border border-black flex'>
            <div className='border-r border-black flex-[0.3] flex justify-center items-center'>
              <p className='text-center p-2 text-sm font-medium'>
                {dayjs(item?.insert_dttm).format('YYYY-MM-DD HH:mm')}
              </p>
            </div>
            <div className='border-r border-black flex-[0.4] flex items-center justify-center'>
              <p className='text-center p-2 text-sm font-medium'>
                {item?.nama_perawat}
              </p>
            </div>
            <div className='border-r border-black flex-1'>
              <p className='p-2 text-sm font-medium'>{item?.asesmen}</p>
            </div>
            <div className='border-r border-black flex-[0.5] flex items-center justify-center'>
              <p className='p-2 text-sm font-medium'>{item?.instruksi_ppa}</p>
            </div>
            <div className='flex-[0.5] flex justify-center items-center'>
              <QRCode
                value={item?.nama_dokter}
                className='h-[100px] w-[100px] p-4'
              />
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  )
}
export default Tabel

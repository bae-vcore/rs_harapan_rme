import dayjs from 'dayjs'
import React from 'react'

const PemeriksaPenunjang = ({ labor = [], radiologi = [] }) => {
  return (
    <div className='border-l border-r border-t border-black p-2'>
      <h3>PEMERIKSA PENUNJANG</h3>

      <div className='mt-4' />
      <h3 className='font-bold mb-2'>Laboratorium</h3>
      {laborTable(labor)}

      <div className='mt-4' />
      <h3 className='font-bold mb-2'>Radiologi</h3>
      {radiologiTable(radiologi)}
    </div>
  )
}
export default PemeriksaPenunjang

function laborTable(labor = []) {
  if (labor.length > 0) {
    return (
      <div className='border border-black'>
        {labor.map((item, index) => (
          <div key={`labor-${index}`}>
            <div className='p-1 bg-gray-300'>
              <p>{item?.tanggal ?? 'tanggal'}</p>
            </div>
            <div className=' p-1 bg-gray-400'>
              <h3 className='font-bold'>
                {item?.nama_kelompok ?? 'nama kelompok'}
              </h3>
            </div>
            <div>
              <div className='flex items-start justify-between'>
                <div className='w-full text-center border-r border-black'>
                  <div className='border-b border-black'>
                    <h3 className='font-medium py-1'>Deskripsi</h3>
                  </div>
                  {item.penlab.map((item, index) => (
                    <p
                      key={`labor-penlab-deskripsi-${index}`}
                      className='text-start  px-2'
                    >
                      {item.pemeriksaan_deskripsi}
                    </p>
                  ))}
                </div>
                <div className='w-full text-center border-r border-black'>
                  <div className='border-b border-black'>
                    <h3 className='font-medium py-1'>Satuan</h3>
                  </div>
                  {item.penlab.map((item, index) => (
                    <p
                      key={`labor-satuan-${index}`}
                      className='text-start  px-2'
                    >
                      {item.satuan}
                    </p>
                  ))}
                </div>
                <div className='w-full text-center border-r border-black'>
                  <div className='border-b border-black'>
                    <h3 className='font-medium py-1'>Normal</h3>
                  </div>
                  {item.penlab.map((item, index) => (
                    <p
                      key={`labor-normal-${index}`}
                      className='text-start  px-2'
                    >
                      {item.normal}
                    </p>
                  ))}
                </div>
                <div className='w-full text-center border-black'>
                  <div className='border-b border-black'>
                    <h3 className='font-medium py-1'>Hasil</h3>
                  </div>
                  {item.penlab.map((item, index) => (
                    <p
                      key={`labor-hasil-${index}`}
                      className='text-start  px-2'
                    >
                      {item.hasil}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

function radiologiTable(radiologi = []) {
  if (radiologi.length > 0) {
    return (
      <div className='border border-black'>
        {radiologi.map((item, index) => (
          <div key={`radiologi-kelompok-${index}`} className='bg-gray-300'>
            <p className='p-2'>
              {item.nama_kelompok} -{' '}
              {dayjs(item.tanggal).format('YYYY-MM-DD HH:mm')}
            </p>
            <div key={index + 7}>
              {item.radiologi.map((item, index) => (
                <React.Fragment key={`item-radiologi-${index}`}>
                  <div className='py-2'>
                    <div className='border-t border-b border-black'>
                      <h3 className='text-center font-bold py-2'>
                        Pemeriksaan :{' '}
                      </h3>
                    </div>
                    <div className='border-b bg-white'>
                      <p className='p-2'>{item.pemeriksaan_deskripsi}</p>
                    </div>
                  </div>
                  <div className='py-2'>
                    <div className='border-t border-b border-black'>
                      <h3 className='text-center font-bold py-2'>Uraian : </h3>
                    </div>
                    <div className='border-b bg-white'>
                      <p className='p-2'>{item.uraian}</p>
                    </div>
                  </div>
                  <div className='py-2'>
                    <div className='border-t border-b border-black'>
                      <h3 className='text-center font-bold py-2'>Hasil : </h3>
                    </div>
                    <div className='border-b bg-white'>
                      <p className='p-2'>{item.hasil}</p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

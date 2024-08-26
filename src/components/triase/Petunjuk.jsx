import BoxCentang from '../BoxCentang'

const Petunjuk = ({ data = {} }) => {
  const { triase } = data

  return (
    <div className='border border-black'>
      <p className='font-medium mb-2 pl-2'>
        Petunjuk : <br />
        Berikan tanda (✓) pada kolom yang sesuai dengan kondisi pasien
      </p>
      {/* Tanggal Dan Jam */}
      <div className='flex items-center'>
        <div className='flex items-center gap-8 w-full border-t  border-r border-black p-1'>
          <p className='font-medium'>Tanggal Masuk</p>
          <p className='font-medium'>: {triase?.tanggal_masuk}</p>
        </div>
        <div className='flex items-center gap-8 w-full border-t  border-r border-black p-1'>
          <p className='font-medium'>Jam Kedatangan</p>
          <p className='font-medium'>: 09:00:30</p>
        </div>
        <div className='flex items-center gap-8 w-full border-t  border-black p-1'>
          <p className='font-medium'>Jam Pemeriksaan</p>
          <p className='font-medium'>: 10:00:00</p>
        </div>
      </div>
      {/* Tanggal Dan Jam */}

      {/* Alasan */}
      <div className='flex items-center p-1  border-t border-black'>
        <p className='font-medium'>Alasan Datang</p>
        <p>
          <span className='ml-40 mr-10'>:</span>
        </p>
        <div className='flex items-center gap-10'>
          <div className='flex items-center'>
            <BoxCentang isChecked={triase?.alasan_masuk == 'Penyakit'} />
            <p>Penyakit</p>
          </div>
          <div className='flex items-center'>
            <BoxCentang isChecked={triase?.alasan_masuk == 'Ruda Paksa'} />
            <p>Ruda Paksa</p>
          </div>
          <div className='flex items-center'>
            <BoxCentang isChecked={triase?.alasan_masuk == 'Cedera'} />
            <p>Cedera</p>
          </div>
        </div>
      </div>
      {/* Alasan */}
    </div>
  )
}
export default Petunjuk

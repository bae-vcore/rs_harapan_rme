import { asesmenNyeriIcon } from 'src/assets/images/asesmen_nyeri'

const Keluhan = ({ data = {} }) => {
  const { keluhan_utama, vital, fisik } = data

  return (
    <div className='border-r border-l border-black'>
      <p className='font-medium p-2'>Penyebab Cedera</p>
      {/* TODO */}
      <div className='h-[50px]' />
      {/* Keluhan Utama */}
      <div>
        <div className='border-black flex items-center border-t'>
          <p className='font-medium p-2'>Keluhan Utama</p>
          <p>
            <span className='ml-[150px] mr-2'>:</span>
          </p>
          <p>{keluhan_utama?.asesmen?.keluh_utama}</p>
        </div>
      </div>
      {/* Keluhan Utama */}

      {/* Tanda Vital */}
      <div className='flex items-start   border-black w-full'>
        <div className=' border-black w-full border-t'>
          <p className='font-medium p-2'>Tanda - Tanda Vital</p>
        </div>
        <div className='w-full border-t border-black border-l  p-1'>
          <p>
            GCS : E:{vital?.gcs_e} M:{vital?.gcs_m} V:{vital?.gcs_v}{' '}
          </p>
          <p>TD : {vital?.td}</p>
          <p>Nadi : {vital?.nadi}</p>
        </div>
        <div className='w-full border-t border-black border-l p-1'>
          <p>Pupil : {vital?.pupil}</p>
          <p>Pernafasan : {vital?.pernafasan}</p>
          <p>Suhu : {vital?.suhu}</p>
        </div>
        <div className='w-full border-t border-black border-l p-1'>
          <p>Refleks Cahaya : </p>
          <p>SpO2 : {vital?.spo2}</p>
          <p>Akral : {vital?.akral}</p>
        </div>
      </div>
      {/* Tanda Vital */}

      {/* Status Alergi */}
      <div className='flex items-start   border-black w-full'>
        <div className=' border-black w-full border-t border-r'>
          <p className='font-medium p-2'>Status Alergi</p>
        </div>
        <div className='w-full border-t border-black p-1'></div>
        <div className='w-full border-t border-black p-1'></div>
        <div className='w-full border-t border-black p-1'></div>
      </div>
      {/* Status Alergi */}
      {/* Gangguan Perilaku */}
      <div className='flex items-start   border-black w-full'>
        <div className=' border-black w-full border-t border-r'>
          <p className='font-medium p-2'>Gangguan Perilaku</p>
        </div>
        <div className='w-full border-t border-black p-1'>
          <p>Tidak terganggu</p>
        </div>
        <div className='w-full border-t border-black p-1'></div>
        <div className='w-full border-t border-black p-1'></div>
      </div>
      {/* Gangguan Perilaku */}
      {/* Status Kehamilan */}
      <div className='flex items-start   border-black w-full'>
        <div className=' border-black w-full border-t border-r'>
          <p className='font-medium p-2'>Status Kehamilan (Khusus Obgyn)</p>
        </div>
        <div className='w-full border-t border-black p-1'>
          <p>Tidak Hamil</p>
        </div>
        <div className='w-full border-t border-black p-1'></div>
        <div className='w-full border-t border-black p-1'></div>
      </div>
      {/* Status Kehamilan */}
      {/* Pemeriksaan Fisik */}
      <div className='flex items-start   border-black w-full'>
        <div className=' border-black w-full border-t'>
          <p className='font-medium p-2'>Pemeriksaan Fisik</p>
        </div>
        <div className='w-full border-l border-t border-black p-1 flex items-start gap-2'>
          <div>
            <p>Jalan Nafas</p>
            <p>Sirkulasi</p>
            <p>Kepala</p>
            <p>Mulut</p>
            <p>DADA</p>
          </div>
          <div>
            <p>: {fisik?.JalanNafas}</p>
            <p>: {fisik?.Sirkulasi}</p>
            <p>: {fisik?.Kepala}</p>
            <p>: {fisik?.Mulut}</p>
            <p>: {fisik?.Dada}</p>
          </div>
        </div>
        <div className='w-full border-t border-black p-1 flex items-start gap-2'>
          <div>
            <p>Pernafasan</p>
            <p>Kesadaran</p>
            <p>THT</p>
            <p>Leher</p>
            <p>Jantung</p>
          </div>
          <div>
            <p>: {fisik?.Pernafasan}</p>
            <p>: {fisik?.Kesadaran}</p>
            <p>: {fisik?.Tht}</p>
            <p>: {fisik?.Leher}</p>
            <p>: {fisik?.Jantung}</p>
          </div>
        </div>
        <div className='w-full p-1' />
      </div>
      {/* Pemeriksaan Fisik */}
      {/* Asesmen Nyeri */}
      <div className='flex items-start   border-black w-full'>
        <div className=' border-black w-full border-t'>
          <p className='font-medium p-2'>Asesmen Nyeri</p>
        </div>
        <div className='w-full border-t border-black p-1 border-l'>
          <div className='flex items-center gap-5'>
            <img
              src={generateIcon(fisik?.SkalaNyeri)}
              alt='icon nyeri'
              className='w-[100px] p-2 object-contain'
            />
            <div>
              <p>P : {fisik?.SkalaNyeriP}</p>
              <p>Q : {fisik?.SkalaNyeriQ}</p>
              <p>R : {fisik?.SkalaNyeriR}</p>
              <p>S : {fisik?.SkalaNyeriS}</p>
              <p>T : {fisik?.SkalaNyeriT}</p>
              <p>U : {fisik?.SkalaNyeriU}</p>
            </div>
          </div>
        </div>
        <div className='w-full border-t border-black p-1'></div>
        <div className='w-full border-t border-black p-1'></div>
      </div>
      {/* Asesmen Nyeri */}
      {/* Skala Triase */}
      <div className='flex items-start   border-black w-full'>
        <div className=' border-black w-full border-t border-r'>
          <p className='font-medium p-2'>Skala Triase</p>
        </div>
        <div className='w-full border-t border-black p-1 bg-red-500 h-[40px]'></div>
        <div className='w-full border-t border-black p-1 bg-red-500 h-[40px]'></div>
        <div className='w-full border-t border-black p-1 bg-red-500 h-[40px]'></div>
      </div>
      {/* Skala Triase */}
    </div>
  )
}
export default Keluhan

function generateIcon(number) {
  switch (number) {
    case 1:
      return asesmenNyeriIcon.AN1
    case 2:
      return asesmenNyeriIcon.AN2
    case 3:
      return asesmenNyeriIcon.AN3
    case 4:
      return asesmenNyeriIcon.AN4
    case 5:
      return asesmenNyeriIcon.AN5
    default:
      return asesmenNyeriIcon.AN1
  }
}

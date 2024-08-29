import { formatBirthDay } from 'src/utils/formatTime'

const TanggalDanJam = ({ tanggal, jam }) => {
  return (
    <div className='border-r border-t border-l  border-black flex items-center px-1'>
      <div className='w-full p-1'>
        <p>Tanggal : {formatBirthDay(tanggal)}</p>
      </div>
      <div className='w-full'>
        <p>Jam : {jam}</p>
      </div>
    </div>
  )
}

export default TanggalDanJam

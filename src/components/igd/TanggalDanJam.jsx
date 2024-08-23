import dayjs from 'dayjs'

const TanggalDanJam = ({ tanggal, jam }) => {
  return (
    <div className='border-r border-t border-l  border-black flex items-center px-1'>
      <div className='w-full p-1'>
        <p>Tanggal : {dayjs(tanggal).format('YYYY-MM-DD')}</p>
      </div>
      <div className='w-full'>
        <p>Jam : {jam}</p>
      </div>
    </div>
  )
}

export default TanggalDanJam

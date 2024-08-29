import { formatBirthDay } from 'src/utils/formatTime'

const DetailPasien = ({ data, no_rm, ruangan }) => {
  return (
    <div className='flex items-start'>
      <div className='flex items-center gap-4 w-full'>
        <div>
          <p>Nama Pasien</p>
          <p>Tanggal Lahir</p>
          <p>Nomor Rekam Medis</p>
        </div>
        <div>
          <p>
            <span> : {data?.nama}</span>
          </p>
          <p>
            <span> : {formatBirthDay(data?.tgl_lahir)}</span>
          </p>
          <p>
            <span> : {no_rm}</span>
          </p>
        </div>
      </div>
      <div className='flex items-center gap-4 w-full'>
        <div>
          <p>Ruangan</p>
        </div>
        <div>
          <p>
            <span> : {ruangan}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default DetailPasien

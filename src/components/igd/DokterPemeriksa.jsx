import QRCode from 'react-qr-code'

const DokterPemeriksa = ({ asesmen = {} }) => {
  return (
    <div className='border-l border-r border-b border-black p-2 text-center flex flex-col justify-between mb-[50px] items-center'>
      <h3>Dokter yang memeriksa</h3>

      <QRCode value={asesmen?.nama_dokter} className='my-5 h-[100px]' />

      <p>
        {asesmen?.nama_dokter ?? '(..........................................)'}
      </p>
    </div>
  )
}
export default DokterPemeriksa

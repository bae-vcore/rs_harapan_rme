import QRCode from 'react-qr-code'

const Petugas = ({ data = {} }) => {
  return (
    <div className='border border-black h-[150px] flex flex-col items-center justify-center p-4 gap-y-1'>
      <p className='font-medium'>Petugas Triase</p>
      <QRCode value={data?.nama} className='h-[100px]' />
      <p className='font-medium'>({data?.nama})</p>
    </div>
  )
}
export default Petugas

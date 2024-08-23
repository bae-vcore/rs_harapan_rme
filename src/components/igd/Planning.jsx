const Planning = ({ asesmen = {} }) => {
  return (
    <div className='border-l border-r  border-black p-2'>
      <h3 className='mt-5'>
        PLANNING : (Penatalaksanaan/ Pengobatan/ Rencana Tindakan/ Konsultasi)
      </h3>
      <p>{asesmen?.terapi ?? ''}</p>
      <div className='h-[50px]' />

      <h3>Konsul Ke</h3>
      <p>{asesmen?.konsulke ?? ''}</p>
      <div className='h-[50px]' />
    </div>
  )
}
export default Planning

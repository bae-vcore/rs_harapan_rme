const RiwayatPenyakit = ({ asesmen = {} }) => {
  return (
    <div className='min-h-[150px] border-l border-r border-t border-black p-2'>
      <h3>Riwayat Penyakit Sekarang : </h3>
      <p>{asesmen?.rwt_sekarang}</p>
      <h3>Riwayat Penyakit Dahulu : </h3>
      <p>{asesmen?.rwt_dahulu}</p>
    </div>
  )
}

export default RiwayatPenyakit

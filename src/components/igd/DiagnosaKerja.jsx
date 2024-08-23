const DiagnosaKerja = ({ diagnosa = [] }) => {
  return (
    <div className='border border-black p-2'>
      <h3>ASESMEN (DIAGNOSA KERJA)</h3>
      <div className='mt-10' />
      <p>DIAGNOSA BANDING</p>
      <div className='mt-2' />
      {diagnosaTable(diagnosa)}
      <div className='mb-10' />
    </div>
  )
}
export default DiagnosaKerja

function diagnosaTable(diagnosa = []) {
  if (diagnosa.length > 0) {
    return (
      <div className='border border-black'>
        <div className='flex items-start justify-between p-2'>
          <div className='mr-5'>
            <div>
              <h3 className='font-bold'>No</h3>
            </div>
            {diagnosa.map((item, index) => (
              <p key={index}>{index + 1}</p>
            ))}
          </div>
          <div className='w-full'>
            <h3 className='font-bold'>KODE PENYAKIT</h3>
            {diagnosa.map((item, index) => (
              <p key={index}>{item.diagnosa}</p>
            ))}
          </div>
          <div className='w-full'>
            <h3 className='font-bold'>JENIS PENYAKIT</h3>
            {diagnosa.map((item, index) => (
              <p key={index}>{item.description}</p>
            ))}
          </div>
          <div className='w-full'>
            <h3 className='font-bold'>DIAGNOSA</h3>
            {diagnosa.map((item, index) => (
              <p key={index} className='capitalize'>
                {item.type}
              </p>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

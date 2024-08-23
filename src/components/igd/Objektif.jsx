const Objektif = ({ asesmen, fisik, vitalSign }) => {
  return (
    <div className='border-l border-r border-t border-black p-2'>
      <h3>OBJEKTIF</h3>
      <p>Tanda-Tanda Vital</p>

      <div className='mt-5 flex items-center'>
        <div className='flex w-full items-center'>
          <div>
            <p>GCS</p>
            <p>TD</p>
            <p>Nadi</p>
            <p>Suhu</p>
          </div>
          <div>
            <p>
              <span className='mr-4'>:</span> E: {fisik?.gcs_e} V:{' '}
              {fisik?.gcs_v} M: {fisik?.gcs_m}
            </p>
            <p>
              <span className='mr-4'>:</span> {vitalSign?.td}
            </p>
            <p>
              <span className='mr-4'>:</span> {vitalSign?.nadi} / menit
            </p>
            <p>
              <span className='mr-4'>:</span> {vitalSign?.suhu} / °C
            </p>
          </div>
        </div>
        <div className='flex w-full items-center'>
          <div>
            <p>Kesadaran</p>
            <p>Pernafasan</p>
            <p>SPO2</p>
          </div>
          <div>
            <p>
              <span className='mr-4'>: {fisik?.kesadaran}</span>
            </p>
            <p>
              <span className='mr-4'>:</span> {vitalSign?.pernafasan} / menit
            </p>
            <p>
              <span className='mr-4'>:</span> {vitalSign?.spo2} %
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Objektif

import Anatomi from 'src/assets/images/anatomi.png'
import { constants } from 'src/utils/constants'

const PemeriksaanFisik = ({ fisik, asesmen }) => {
  // console.log('image lokalis', constants.baseUrlImage + asesmen?.image_lokalis)
  return (
    <div className='border-l border-r border-t border-black p-2'>
      <h3>PEMERIKSAAN FISIK</h3>

      <div className='flex items-center justify-around'>
        <div className='flex w-full items-center gap-10'>
          <div className='mt-8'>
            <p>KEPALA</p>
            <p>MATA</p>
            <p>THT</p>
            <p>MULUT</p>
            <p>LEHER</p>
            <p>DADA</p>
            <p>JANTUNG</p>
          </div>
          <div className='mt-8'>
            <p>: {fisik?.kepala}</p>
            <p>: {fisik?.mata}</p>
            <p>: {fisik?.tht}</p>
            <p>: {fisik?.mulut}</p>
            <p>: {fisik?.leher}</p>
            <p>: {fisik?.dada}</p>
            <p>: {fisik?.jantung}</p>
          </div>
        </div>{' '}
        <div className='flex w-full items-center gap-10'>
          <div className='mt-8'>
            <p>LIMPA</p>
            <p>GINJAL</p>
            <p>ALAT KELAMIN</p>
            <p>ANGGOTA GERAK</p>
            <p>REFLEKS</p>
            <p>KEKUATAN OTOT</p>
            <p>KULIT</p>
          </div>
          <div className='mt-8'>
            <p>: {fisik?.limpa}</p>
            <p>: {fisik?.ginjal}</p>
            <p>: {fisik?.alat_kelamin}</p>
            <p>: {fisik?.anggota_gerak}</p>
            <p>: {fisik?.refleks}</p>
            <p>: {fisik?.kekuatan_otot}</p>
            <p>: {fisik?.kulit}</p>
          </div>
        </div>
      </div>
      <div className='text-center flex items-center justify-center'>
        <img
          src={`${constants.baseUrlImage}${asesmen?.image_lokalis}` ?? Anatomi}
          alt='gambar anatomi tubuh'
          className='object-contain'
        />
      </div>
    </div>
  )
}
export default PemeriksaanFisik

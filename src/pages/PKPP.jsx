import ErrorPage from 'src/components/ErrorPage'
import KopSurat from 'src/components/KopSurat'
import Layout from 'src/components/Layout'
import Loading from 'src/components/Loading'
import NoData from 'src/components/NoData'
import Pasien from 'src/components/pkpp/Pasien'
import TabelLaporan from 'src/components/pkpp/TabelLaporan'
import { useGetDataPKPP } from 'src/hooks/useGetDataPKPP'

const PKKP = () => {
  const { data, loading, error, no_rm } = useGetDataPKPP()
  console.log('PKKP : ', data)

  if (loading) return <Loading />
  if (data == null) return <NoData />
  if (error) return <ErrorPage />

  return (
    <Layout>
      <div className='border border-black p-4'>
        <KopSurat />
        <div className='text-center my-2'>
          <h1 className='font-bold text-2xl'>PELAKSANAAN KEPERAWATAN</h1>
          <h1 className='font-bold text-2xl'>DAN PERKEMBANGAN PASIEN</h1>
        </div>
        <Pasien
          pasien={data?.pasien}
          noRm={no_rm}
          ruangan={data?.pelayanan?.bagian}
        />
        {data?.intervensi?.length > 0 &&
          data?.intervensi?.map((item, index) => (
            <TabelLaporan isHead={index == 0} key={index} item={item} />
          ))}
      </div>
    </Layout>
  )
}

export default PKKP

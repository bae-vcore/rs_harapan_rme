import PasienDetail from 'src/components/common/PasienDetail'
import ErrorPage from 'src/components/ErrorPage'
import KopSurat from 'src/components/KopSurat'
import Layout from 'src/components/Layout'
import Loading from 'src/components/Loading'
import NoData from 'src/components/NoData'
import Keluhan from 'src/components/triase/Keluhan'
import Petugas from 'src/components/triase/Petugas'
import Petunjuk from 'src/components/triase/Petunjuk'
import { useGetDataTriase } from 'src/hooks/useGetDataTriase'

const Triase = () => {
  const { data, loading, error } = useGetDataTriase()

  if (loading) return <Loading />
  if (data == null) return <NoData />
  if (error) return <ErrorPage />

  return (
    <Layout>
      <div className='border border-black p-4'>
        <KopSurat />
        <PasienDetail
          pasien={data?.pasien}
          title={
            <div>
              <h3 className='font-bold text-3xl'>I. TRIASE</h3>
            </div>
          }
        />
        <Petunjuk data={data} />
        <Keluhan data={data} />
        <Petugas data={data?.karyawan} />
      </div>
    </Layout>
  )
}

export default Triase

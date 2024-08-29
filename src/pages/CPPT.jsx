import DetailPasien from 'src/components/cppt/DetailPasien'
import Tabel from 'src/components/cppt/Tabel'
import ErrorPage from 'src/components/ErrorPage'
import KopSurat from 'src/components/KopSurat'
import Layout from 'src/components/Layout'
import Loading from 'src/components/Loading'
import NoData from 'src/components/NoData'
import { useGetDataCPPT } from 'src/hooks/useGetDataCPPT'

const CPPT = () => {
  const { data, loading, error, no_rm } = useGetDataCPPT()

  if (loading) return <Loading />
  if (data == null) return <NoData />
  if (error) return <ErrorPage />

  return (
    <Layout>
      <div className='border border-black p-4'>
        <KopSurat hasAkredistasi />
        <div className='text-center my-2'>
          <h1 className='font-bold'>
            CATATAN PERKEMBANGAN PASIEN TERINTEGRASI (CPPT)
          </h1>
        </div>
        <DetailPasien
          data={data?.pasien ?? {}}
          no_rm={no_rm ?? ''}
          ruangan={data?.pelayanan?.bagian ?? {}}
        />
        <Tabel data={data?.cppt ?? []} />
      </div>
    </Layout>
  )
}

export default CPPT

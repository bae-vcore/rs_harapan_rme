import KopSurat from 'src/components/KopSurat'
import ErrorPage from 'src/components/ErrorPage'
import DiagnosaKerja from 'src/components/igd/DiagnosaKerja'
import DokterPemeriksa from 'src/components/igd/DokterPemeriksa'
import KeluhanUtama from 'src/components/igd/KeluhanUtama'
import Objektif from 'src/components/igd/Objektif'
import PasienDetail from 'src/components/common/PasienDetail'
import PemeriksaanFisik from 'src/components/igd/PemeriksaanFisik'
import PemeriksaPenunjang from 'src/components/igd/PemeriksaPenunjang'
import Planning from 'src/components/igd/Planning'
import Prognosa from 'src/components/igd/Prognosa'
import RiwayatPenyakit from 'src/components/igd/RiwayatPenyakit'
import TanggalDanJam from 'src/components/igd/TanggalDanJam'
import { useGetDataFormIGD } from 'src/hooks/useGetDataFormIGD'
import Layout from 'src/components/Layout'
import Loading from 'src/components/Loading'
import NoData from 'src/components/NoData'

// eslint-disable-next-line react/prop-types
const FormIGD = () => {
  const { data, error, loading } = useGetDataFormIGD()

  const { asesmen, diagnosa, fisik, vital_sign, labor, radiologi, pasien } =
    data ?? {}

  if (loading) return <Loading />
  if (error) return <ErrorPage />
  if (data == null) return <NoData />

  return (
    <Layout>
      <div className='border border-black p-4'>
        <KopSurat />
        <PasienDetail
          pasien={pasien}
          title={
            <div>
              <h3>ASESMEN AWAL MEDIS</h3>
              <h3>INSTALASI GAWAT DARURAT</h3>
            </div>
          }
        />
        <TanggalDanJam tanggal={asesmen?.tgl_masuk} jam={asesmen?.jam_masuk} />
        <KeluhanUtama KeluhanUtama={asesmen?.keluh_utama} />
        <RiwayatPenyakit asesmen={asesmen} />
        <Objektif fisik={fisik} vitalSign={vital_sign} />
        <PemeriksaanFisik fisik={fisik} asesmen={asesmen} />
        <PemeriksaPenunjang labor={labor} radiologi={radiologi} />
        <DiagnosaKerja diagnosa={diagnosa} />
        <Planning asesmen={asesmen} />
        <Prognosa asesmen={asesmen} />
        <DokterPemeriksa asesmen={asesmen} />
      </div>
    </Layout>
  )
}

export default FormIGD

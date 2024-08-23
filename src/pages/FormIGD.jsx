import KopSurat from 'components/igd/KopSurat'
import DiagnosaKerja from 'src/components/igd/DiagnosaKerja'
import DokterPemeriksa from 'src/components/igd/DokterPemeriksa'
import KeluhanUtama from 'src/components/igd/KeluhanUtama'
import Objektif from 'src/components/igd/Objektif'
import PasienDetail from 'src/components/igd/PasienDetail'
import PemeriksaanFisik from 'src/components/igd/PemeriksaanFisik'
import PemeriksaPenunjang from 'src/components/igd/PemeriksaPenunjang'
import Planning from 'src/components/igd/Planning'
import Prognosa from 'src/components/igd/Prognosa'
import RiwayatPenyakit from 'src/components/igd/RiwayatPenyakit'
import TanggalDanJam from 'src/components/igd/TanggalDanJam'

// eslint-disable-next-line react/prop-types
const FormIGD = ({ data }) => {
  const { asesmen, diagnosa, fisik, vital_sign, labor, radiologi, pasien } =
    data ?? {}

  return (
    <div className='border border-black p-4'>
      <KopSurat />
      <PasienDetail pasien={pasien} />
      <TanggalDanJam tanggal={asesmen?.tgl_masuk} jam={asesmen?.jam_masuk} />
      <KeluhanUtama KeluhanUtama={asesmen?.keluh_utama} />
      <RiwayatPenyakit
        riwayatSekarang={asesmen?.rwt_sekarang}
        riwayatDulu={asesmen?.rwt_dulu}
      />
      <Objektif fisik={fisik} vitalSign={vital_sign} />
      <PemeriksaanFisik fisik={fisik} />
      <PemeriksaPenunjang labor={labor} radiologi={radiologi} />
      <DiagnosaKerja diagnosa={diagnosa} />
      <Planning asesmen={asesmen} />
      <Prognosa asesmen={asesmen} />
      <DokterPemeriksa asesmen={asesmen} />
    </div>
  )
}

export default FormIGD

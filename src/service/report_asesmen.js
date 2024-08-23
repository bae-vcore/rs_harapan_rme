import { put } from './api'

export const getReportAsesmenAwal = async (no_reg, no_rm, tanggal, person) => {
  try {
    const response = await put(
      '/report-asesmen-awal-medis-dokter-igd-harapan',
      { no_reg, no_rm, tanggal, person },
      null
    )
    console.log(response.data?.response)
    return response.data
  } catch (error) {
    console.log('error while getReportAsesmenAwal: ', error)
  }
}

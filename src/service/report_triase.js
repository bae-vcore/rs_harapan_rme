import { put } from './api'

export const getTriase = async (no_rm, no_reg, tanggal, token) => {
  try {
    const response = await put(
      '/triase-igd-dokter',
      { no_rm, no_reg, tanggal },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    console.log(response.data?.response)
    return response.data
  } catch (error) {
    console.log('error while getTriase: ', error)
  }
}

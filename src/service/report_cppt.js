import { put } from './apiv2'

export const getCPPT = async (no_rm, token) => {
  try {
    const response = await put(
      '/cppt-pasien',
      { no_rm },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    console.log(response.data?.response)
    return response.data
  } catch (error) {
    console.log('error while getCPPT: ', error)
  }
}

import { get } from './apiv2'

export const getPKPP = async (no_rm, kd_bagian, token) => {
  try {
    const response = await get('/report-intervensi', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { no_rm: no_rm, kd_bagian: kd_bagian },
    })
    return response.data
  } catch (error) {
    console.log('error while getPKPP: ', error)
  }
}

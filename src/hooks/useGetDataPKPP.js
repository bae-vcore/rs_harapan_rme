import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getPKPP } from 'src/service/report_pkpp'

export const useGetDataPKPP = () => {
  const [params] = useSearchParams()
  const token = params.get('token') ?? ''
  const no_rm = params.get('no_rm') ?? ''
  const kd_bagian = params.get('kd_bagian') ?? ''

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      try {
        const res = await getPKPP(no_rm, kd_bagian, token)

        if (res?.metadata?.code == 200) {
          setData(res?.response)
        }
        setLoading(false)
      } catch (error) {
        console.log('error : ', error)
        setLoading(false)
        setError(true)
      }
    })()
  }, [])

  return { data, error, loading, no_rm }
}

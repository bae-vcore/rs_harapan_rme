import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getTriase } from 'src/service/report_triase'

export const useGetDataTriase = () => {
  const [params] = useSearchParams()
  const token = params.get('token') ?? ''
  const no_rm = params.get('no_rm') ?? ''
  const no_reg = params.get('no_reg') ?? ''
  const tanggal = params.get('tanggal') ?? ''

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      try {
        const res = await getTriase(no_rm, no_reg, tanggal, token)

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

import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getCPPT } from 'src/service/cppt'

export const useGetDataCPPT = () => {
  const [params, setSearchParams] = useSearchParams()
  const token = params.get('token') ?? ''
  const no_rm = params.get('no_rm') ?? ''

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      try {
        const res = await getCPPT(no_rm, token)

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

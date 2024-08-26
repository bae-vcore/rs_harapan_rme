import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getReportAsesmenAwal } from 'src/service/report_asesmen'

export const useGetDataFormIGD = () => {
  const [params, setSearchParams] = useSearchParams()
  const no_reg = params.get('no_reg') ?? ''
  const no_rm = params.get('no_rm') ?? ''
  const tanggal = params.get('tanggal') ?? ''
  const person = params.get('person') ?? ''

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      try {
        const res = await getReportAsesmenAwal(no_reg, no_rm, tanggal, person)

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

  return { data, error, loading }
}

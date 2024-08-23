import { useSearchParams } from 'react-router-dom'
import FormIGD from './pages/FormIGD'
import { useEffect, useState } from 'react'
import { getReportAsesmenAwal } from './service/report_asesmen'

function App() {
  const [params, setSearchParams] = useSearchParams()
  const no_reg = params.get('no_reg') ?? ''
  const no_rm = params.get('no_rm') ?? ''
  const tanggal = params.get('tanggal') ?? ''
  const person = params.get('person') ?? ''

  const [data, setData] = useState(null)

  useEffect(() => {
    ;(async () => {
      const res = await getReportAsesmenAwal(no_reg, no_rm, tanggal, person)

      if (res?.metadata?.code == 200) {
        setData(res?.response)
      }
    })()
  }, [])

  return (
    <main className='max-w-[1920px] mx-auto p-4 '>
      {data != null ? (
        <FormIGD data={data} />
      ) : (
        <div className='flex justify-center items-center'>
          <p className='py-[250px]'>No Data</p>
        </div>
      )}
    </main>
  )
}

export default App

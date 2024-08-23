const Prognosa = ({ asesmen = {} }) => {
  return (
    <div className='border border-black flex items-center px-2 h-[50px]'>
      PROGNOSA : {asesmen?.prognosis ?? ''}
    </div>
  )
}
export default Prognosa

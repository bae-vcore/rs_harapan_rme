const BoxCentang = ({ isChecked = false }) => {
  return (
    <div className='border border-black h-5 w-5 flex items-center justify-center mr-2'>
      {isChecked && '✓'}
    </div>
  )
}
export default BoxCentang

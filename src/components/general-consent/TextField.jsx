const TextField = ({ title, value }) => {
  return (
    <div className='px-8 mt-5'>
      <div className='flex items-center'>
        <div className='min-w-[250px]'>
          <p>{title ?? ''}</p>
        </div>
        <div>
          <p>: {value ?? ''}</p>
        </div>
      </div>
    </div>
  )
}
export default TextField

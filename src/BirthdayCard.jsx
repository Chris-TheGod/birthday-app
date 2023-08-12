export const BirthdayCard = ({ friends }) => {
  return (
    <div className='flex flex-wrap justify-center'>
      {friends.map(({ id, fullName, birthday }) => (
        <div
          key={id}
          className='bg-black rounded-lg p-4 shadow-md m-4 max-w-xs w-full'>
          <div className='text-xl font-semibold'>{fullName}</div>
          <div className='text-gray-600'>{birthday}</div>
        </div>
      ))}
    </div>
  )
}

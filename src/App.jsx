import { BirthdayCard } from './BirthdayCard'
import './index.css'

const friends = [
  {
    id: '1',
    fullName: 'John Doe',
    birthday: '1995-03-15',
  },
  {
    id: '2',
    fullName: 'Jane Smith',
    birthday: '1988-09-22',
  },
  {
    id: '3',
    fullName: 'Michael Johnson',
    birthday: '2000-06-10',
  },
  {
    id: '4',
    fullName: 'Emily Williams',
    birthday: '1992-11-05',
  },
  {
    id: '5',
    fullName: 'David Brown',
    birthday: '1985-01-30',
  },
]

function App() {
  return (
    <div className='bg-gray-900 min-h-screen flex items-center justify-center'>
      <div className='bg-violet-800 text-white p-8 rounded-lg shadow-xl'>
        <h1 className='text-4xl font-semibold mb-6'>Birthday Reminder App</h1>
        <BirthdayCard friends={friends} />
      </div>
    </div>
  )
}

export default App

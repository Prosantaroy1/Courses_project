import './App.css'
import Courses_sec from './Component/Courses_Sec/Courses_sec'
import Courses_add from './Component/Courses_add/Courses_add'
import Header from './Component/Header/Header'

function App() {
  

  return (
    <>
      <Header/>
      <div className='flex justify-between items-center gap-11 px-12 mt-7'>
          <Courses_sec></Courses_sec>
          <Courses_add></Courses_add>
      </div>
    </>
  )
}

export default App

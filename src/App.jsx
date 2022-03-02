import { Routes, Route, Link } from 'react-router-dom'
import DependencyArray from './dependencyArray'

import './styles.css'

function Home() {
  return (
    <div>
      <h1>Hooks Experiments!</h1>
    </div>
  )
}

export default function App() {
  return (
    <div className='container'>
      <ul className='menu'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/dependency-array'>Dependency Array</Link>
        </li>
      </ul>
      <div className='content'>
        <Routes>
          <Route path='/dependency-array' element={<DependencyArray />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

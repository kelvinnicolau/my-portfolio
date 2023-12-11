import './App.scss'
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home'
import { About } from './components/About'
import { Layout } from './components/Layout'
import { Portfolio } from './components/Portfolio';
import { Projects } from './components/Projects';

function App() {
  return (
    <div>
       <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/projects' element={<Projects />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App

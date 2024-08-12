import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Layout } from './components/Layout';
import { Projects } from './components/Projects';
import ProjectsLayout from './components/ProjectsLayout';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
        <Route element={<ProjectsLayout />}>
          <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

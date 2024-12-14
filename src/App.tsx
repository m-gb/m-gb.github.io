import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomeComponent from './components/home/home'
import InfoComponent from './components/info/info'
import ExperienceComponent from './components/experience/experience'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  // initialize fontawesome
  library.add(fab, fas)

  return (
    <div>
      <main role="main">
        <Routes>
          <Route path="/" element={<HomeComponent />} />
        </Routes>
        <Routes>
          <Route path="/" element={<InfoComponent />} />
        </Routes>
        <Routes>
          <Route path="/" element={<ExperienceComponent />} />
        </Routes>
      </main>
    </div>
  );
}

export default App

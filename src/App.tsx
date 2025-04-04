import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Leads, Login, Profile, Registration } from './pages'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/leads" element={<Leads />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

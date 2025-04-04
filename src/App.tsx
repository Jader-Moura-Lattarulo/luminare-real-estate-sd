import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<>LOGIN</>}></Route>
          <Route path="/home" element={<>HOME</>}></Route>
          <Route path="/leads" element={<>LEADS</>}></Route>
          <Route path="/profile" element={<>PROFILE</>}></Route>
          <Route path="/register" element={<>REGISTER</>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

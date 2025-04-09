import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom'
import Cookies from 'js-cookie'
import { Home, Leads, Login, Profile, Registration } from './pages'

function App() {
  const ProtectedRoute = () => {
    const checkAuthCookies = Cookies.get('Authorization')
    if (!checkAuthCookies) {
      alert('Autentificação necessária!')
      return <Navigate to="/" replace />
    }

    return <Outlet />
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/leads" element={<Leads />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

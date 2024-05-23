import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
// import Register from './pages/Register'
// import Orders from './pages/Orders'
// import Customers from './pages/Customers'
// import Dashboard from './pages/Dashboard'
// import Products from './pages/Products'
import PrivateRoute from './PrivateRoute'
import Login from './pages/Login'

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="*" element={<Layout />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default App

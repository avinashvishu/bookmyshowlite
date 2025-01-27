import './App.css'
import EventList from './pages/EventList';
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {


  return (
    <div className="App">
      <Routes>
                  <Route path="/" element={<ProtectedRoute Components={EventList} />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/login" element={<LoginPage />} />
      </Routes>
   </div>
  )
}

export default App

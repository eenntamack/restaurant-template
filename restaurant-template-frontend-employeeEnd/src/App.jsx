import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Info from '../pages/Info';
import Log from '../pages/Log';
import MainPage from '../pages/Mainpage';
import Report from '../pages/Report';
import Tasks from '../pages/Tasks';
import ProtectedRoute from '../components/ProtectedRoute';
import Admin from '../pages/Admin';
import Register from '../pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>}/>

        <Route element={<ProtectedRoute allowedRoles={['employee']} />}>
          <Route path="/employee" element={<MainPage />}>
            
            <Route index element={<Info />} />
            <Route path="/employee/info" element={<Info />} />
            <Route path="/employee/reports" element={<Report />} />
            <Route path="/employee/tasks" element={<Tasks />} />
            <Route path="/employee/logs" element={<Log />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<Admin />}>
            <Route index element={<Info />} />
            <Route path="info" element={<Info />} />
            <Route path="reports" element={<Report />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="logs" element={<Log />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
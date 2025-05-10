import { BrowserRouter as Router, Routes, Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store } from './store';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Assessment from './pages/Assessment';
import Roadmap from './pages/Roadmap';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivateRoute from './components/PrivateRoute';

// Create router with future flags
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/assessment"
        element={
          <PrivateRoute>
            <Assessment />
          </PrivateRoute>
        }
      />
      <Route
        path="/roadmap"
        element={
          <PrivateRoute>
            <Roadmap />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
    </Route>
  ),
  {
    future: {
      v7_normalizeFormMethod: true
    }
  }
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </Provider>
  );
}

export default App; 
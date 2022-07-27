import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { MovieContext } from '../context/AuthContext';

const PrivateRouter = () => {
  // const user = JSON.parse(sessionStorage.getItem('name'));
  const {currentUser} = useContext(MovieContext);
  return currentUser ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRouter;
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  // const user = JSON.parse(sessionStorage.getItem('name'));
  const user = useContext();
  return user ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRouter;
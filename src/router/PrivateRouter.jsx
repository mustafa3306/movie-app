import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const user = JSON.parse(sessionStorage.getItem('name'));

  return user ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRouter;
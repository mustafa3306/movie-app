import './App.css';
import AuthContext from './context/AuthContext';
import Router from './router/Router';

function App() {
  return (
    <AuthContext>
      <Router />
    </AuthContext>
  );
}

export default App;

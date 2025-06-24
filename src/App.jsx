import { Routes, Route } from 'react-router-dom';
import Home from './components/mainComponent.jsx'
import LS from './components/login-signin.jsx'
import Cart from './components/cart.jsx'
function App() {
  return (
    <Routes>
      <Route path="/" element={<LS />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
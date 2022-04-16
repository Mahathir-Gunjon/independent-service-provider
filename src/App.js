import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import RequireAuth from './Pages/Auth/RequireAuth';
import Blog from './Pages/Blogs/Blog';
import Checkout from './Pages/Checkout/Checkout';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login and SignUp/Login/Login';
import Signup from './Pages/Login and SignUp/Signup/Signup';
import Notfound from './Pages/Notfound/Notfound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />       
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout/>
          </RequireAuth>
        } />       
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />  
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;

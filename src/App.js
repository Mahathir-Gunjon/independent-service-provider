import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blogs/Blog';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login and SignUp/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

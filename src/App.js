
import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Womens from './components/shop/Womens';
import Mens from './components/shop/Mens';
import ProductDetail from './components/shop/Details';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Login from './components/shop/Login';
import Home from './components/shop/Home';
import './App.css';

function App() {

  const [token, setToken] = useState(null);
  const [username, setUsername] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  

  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    const savedUsername = localStorage.getItem('username');
    if (savedToken && savedUsername) {
      setToken(savedToken);
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = (newToken, newUsername) => {
    setToken(newToken);
    setUsername(newUsername);
    localStorage.setItem('authToken', newToken);
    localStorage.setItem('username', newUsername);
  };

  const handleLogout = () => {
    setToken(null);
    setUsername('');
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
  };


  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleWishlist = (product) => {
    setWishlist(prevWishlist => {
      const isInWishlist = prevWishlist.some(item => item.id === product.id);
      if (isInWishlist) {
        return prevWishlist.filter(item => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  const toggleCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        // If item exists, remove it
        return prevCart.filter(item => item.id !== product.id);
      } else {
        // If item doesn't exist, add it
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      <Navbar wishlistSize={wishlist.length} cartSize={cart.length}  username={username}
        handleLogout={handleLogout} onSearch={setSearchQuery}/>
      <Routes>
        <Route path="/" element={<Home toggleWishlist={toggleWishlist} wishlist={wishlist} searchQuery={searchQuery}/>} />
        <Route path="/women" element={<Womens searchQuery={searchQuery}/>} />
        <Route path="/men" element={<Mens searchQuery={searchQuery}/>} />
      
        <Route path="/login" element={<Login token={token} username={username} handleLogin={handleLogin} />}/>
        <Route 
          path="/product/:id" 
          element={
            <ProductDetail 
              toggleWishlist={toggleWishlist}
              toggleCart={toggleCart}
              wishlist={wishlist}
              cart={cart}
            />
          } 
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
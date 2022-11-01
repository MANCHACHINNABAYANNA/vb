import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';

import Products from './components/products/Products';

import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import ProductListingPage from './pages/ProductListingPage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div>
      <ProductListingPage />
      <br />
    </div>
    <div>
      <Footer />
    </div>
    </div>
  );
}

export default App;

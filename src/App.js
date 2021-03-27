// import logo from './logo.svg';
import './App.css';
// import ProductListingPage from './pages/ProductListingPage';

import RouteContainer from './components/RouteContainer';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/about">About</Link></li>
          <li><Link to = "/product">Products</Link></li>
          <li><Link to = "/footer">Footer</Link></li>
        </ul>
      </div>
      <RouteContainer />
      <Footer />
    </BrowserRouter>
    
    // <div>
    //   <div>
    //   <ProductListingPage />
    //   <br />
    // </div>
    // <div>
    //   
    // </div>
    // </div>
  );
}

export default App;

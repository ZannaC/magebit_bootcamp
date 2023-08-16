import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Homepage from '../pages/homepage';
import Plp from '../pages/plp';
import Pdp from '../pages/pdp';
import Cart from '../pages/cart';
import { ProductProvider } from '../ProductContext';
import '../../sass/app.css';

function App() {

  const Layout = ({ children }) => {
    return (
      <>
        <Header/>
            <main>
                {children}
            </main>
        <Footer />
      </>
    );
  };

  return (
<ProductProvider>
    <BrowserRouter>
    <Layout>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="plp" element={<Plp />} />
            <Route path="pdp" element={<Pdp />} />
            <Route path="cart" element={<Cart />} />
        </Routes>
    </Layout>
    </BrowserRouter>
  </ProductProvider>
  );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

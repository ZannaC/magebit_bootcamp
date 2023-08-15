import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Homepage from '../pages/homepage';
import Checkout from '../pages/checkout';
import '../../sass/app.css';

function App() {

  const Layout = ({ children }) => {
    return (
      <>
        <Header/>
        {children}
        <Footer />
      </>
    );
  };

  return (
  <Router>
   <Layout>
    <Routes>
     <Route path="/" element={<Homepage />} />
     <Route path="/checkout" element={<Checkout />} />
    </Routes>
   </Layout>
  </Router>
  );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

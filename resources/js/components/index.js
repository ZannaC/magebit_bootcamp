import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Homepage from '../pages/homepage';
import Plp from '../pages/plp';
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
  <BrowserRouter>
   <Layout>
    <Routes>
     <Route path="" element={<Homepage />} />
     <Route path="plp" element={<Plp />} />
    </Routes>
   </Layout>
  </BrowserRouter>
  );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}



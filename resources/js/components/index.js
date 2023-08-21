import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    BrowserRouter,
} from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Homepage from "../pages/homepage";
import Pdp from "../pages/pdp";
import Plp from "../pages/plp";
import Cart from "../pages/cart";
import "../../sass/app.css";
import { ProductProvider } from "../ProductContext";
import Checkout from "../pages/checkout";
import About from "../pages/about";
import Login from "../pages/login";
import RegisterPage from "../pages/register";

function App() {
    const Layout = ({ children }) => {
        return (
            <>
                <Header />
                    <main>
                        {children}
                    </main>
                <Footer />
            </>
        );
    };

    return (
        <ProductProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/plp" element={<Plp />} />
                        <Route path="/pdp" element={<Pdp />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                </Layout>
            </Router>
        </ProductProvider>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}

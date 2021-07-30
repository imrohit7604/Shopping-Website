import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider as AuthProvider } from "../context/AuthContext";
import { Provider as CartProvider } from "../context/CartContext";
import { Provider as ProductProvider } from "../context/ProductsContext";
import Footer from "./ui/Footer";
import Login from "./ui/Login";
import NavBar from "./ui/NavBar";
import Register from "./ui/Register";
import Home from "./ui/Home";
import Products from "./ui/Products";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <Router>
            <NavBar />
            <main>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/products">
                  <Products />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
              </Switch>
            </main>
            <Footer />
          </Router>
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

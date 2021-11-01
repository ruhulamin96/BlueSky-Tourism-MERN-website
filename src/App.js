import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import ServiceDetails from "./Components/Services/ServiceDetails";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";
import Navbar from './Components/Navbar/Navbar'
import Footer from "./Components/Footer/Footer";
import ManageOrder from "./Components/ManageOrder/ManageOrder";

function App() {
  return (
    <div>
      
        <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
            <Navbar></Navbar>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route exact path="/home">
            <Navbar></Navbar>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <PrivateRoute exact path="/about">
            <Navbar></Navbar>
              <About></About>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/allorders">
            <Navbar></Navbar>
              <ManageOrder></ManageOrder>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
              <Footer></Footer>
            </PrivateRoute>
            <Route exact path="/login">
            <Navbar></Navbar>
              <Login></Login>
              <Footer></Footer>
            </Route>
            
            <PrivateRoute exact path="/contact">
            <Navbar></Navbar>
              <Contact></Contact>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
        </AuthProvider>
      
    </div>
  );
}

export default App;

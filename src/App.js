import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import MainNavBar from "./components/mainNav";
import Product from "./components/products/products";
import Footer from "./components/footer";
import Service from "./components/services/services";
import About from "./components/about/about";
import Login from "./components/login/login";
import Contact from "./components/contactUs/contact";
import Status from "./components/contactUs/status/status";
import LogOutModal from "./components/login/logoutModal";
import SpeedCheck from "./components/contactUs/speedCheck/speedCheck";
import TroubleShoot from "./components/contactUs/troubleshoot/troubleshoot";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    if (
      e.target.Username.value == "admin@kanini.com" &&
      e.target.Password.value == "admin@123"
    ) {
      this.setState({ loggedIn: true });
      toast.success("Login success");
    } else {
      this.setState({ loggedIn: false });
      toast.error("Wrong username or password");
    }
  };

  handleLogOut = () => {
    this.setState({ loggedIn: false });
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <MainNavBar
            loggedIn={this.state.loggedIn}
            handleLogOut={this.handleLogOut}
          />
          {this.state.loggedIn ? (
            <>
              <Routes>
                <Route path="/" element={<Home />}>
                  <Route path="logout" element={<LogOutModal />} />
                </Route>
                <Route exact path="/products" element={<Product />} />
                <Route exact path="/services" element={<Service />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/login" element={<Login />} />
                <Route path="/contact/" element={<Contact />}>
                  <Route path="support" element={<Status />} />
                  <Route path="speedtest" element={<SpeedCheck />} />
                  <Route path="troubleshoot" element={<TroubleShoot />} />
                </Route>
              </Routes>
            </>
          ) : (
            <Login handleClick={(e) => this.handleClick(e)} />
          )}
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;

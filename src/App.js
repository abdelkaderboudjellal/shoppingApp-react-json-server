import "./App.css";
import React from "react";

import Home from "./components/page/Home";
import Navbar from "./components/page/Navbar";
import Footer from "./components/page/Footer";
import { Routes, Route, Switch } from "react-router-dom";
import Shoping from "./components/phoneComponents/Shoping";
/* const ShopingLazy = React.lazy(() =>
  import("./components/phoneComponents/Shoping")
); */
import DetailsPhone from "./components/phoneComponents/DetailsPhone";
import Contact from "./components/page/Contact";
import About from "./components/page/About";
import { Suspense } from "react";
import AddProudect from "./components/page/AddProudect";
import SingUp from "./components/login/SingUp";
import LoginPage from "./components/login/LoginPage";
import Loading from "./components/page/Loading";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/Shopping" element={<Shoping />} />
          <Route path="/Shopping/:prodectId" element={<DetailsPhone />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/AddProudect" element={<AddProudect />} />
        </Routes>

        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./components/page/Home";
import Navbar from "./components/page/Navbar";
import Footer from "./components/page/Footer";
import { Routes, Route, Switch } from "react-router-dom";
import Shoping from "./components/phoneComponents/Shoping";
import DetailsPhone from "./components/phoneComponents/DetailsPhone";
import Contact from "./components/page/Contact";
import About from "./components/page/About";

import AddProudect from "./components/page/AddProudect";
import SingUp from "./components/login/SingUp";
import LoginPage from "./components/login/LoginPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AddProudect/> */}

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
    </div>
  );
}

export default App;

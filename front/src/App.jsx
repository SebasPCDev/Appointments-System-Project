import Footer from "./components/Footer/footer";
import NavBar from "./components/Navbar/Navbar";
import About from "./views/About/About";
import Appointments from "./views/Appointment/Appointments";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/home";
import Landing from "./views/Landing/Landing";
import Login from "./views/Login/Login";
import NewAppointment from "./views/NewAppointment/NewAppointment";
import Register from "./views/Register/Register";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/newappo" element={<NewAppointment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

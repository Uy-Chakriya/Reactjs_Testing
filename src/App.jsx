import NavbarComponent from "./components/NavbarComponent";
import AboutUsComponent from "./components/AboutUsComponent";
import { Route, Routes } from "react-router-dom";
import HomePageComponent from "./components/HomePageComponent";
import ContactUsComponent from "./components/ContactUsComponent";

function App() {
  return (
    <>
      <NavbarComponent />

      <Routes>
        <Route path="/home-page" element={<HomePageComponent />} />
        <Route path="/about-as" element={<AboutUsComponent />} />
        <Route path="/contact-us" element={<ContactUsComponent />} />
      </Routes>

      <HomePageComponent />
    </>
  );
}

export default App;

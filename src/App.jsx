import NavbarComponent from "./components/NavbarComponent";
import AboutUsComponent from "./components/AboutUsComponent";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePageComponent from "./components/HomePageComponent";
import ContactUsComponent from "./components/ContactUsComponent";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarComponent />

      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Navigate to="/home-page" />} />
          <Route
            path="/home-page"
            element={
              <HomePageComponent name="Chakriya" age="20" gender="Female" />
            }
          />
          <Route path="/about-us" element={<AboutUsComponent />} />
          <Route path="/contact-us" element={<ContactUsComponent />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

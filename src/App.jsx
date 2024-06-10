import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PropertyCard from "./components/PropertyCard";
import services from "./data.json";
import ContactForm from "./components/ContactForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-container">
        <div className="header-and-contact">
          <div className="header-container">
            <Header />
          </div>
          <div className="email-section">
            <ContactForm />
          </div>
        </div>
        <div className="property-list">
          {services.map((service, index) => (
            <PropertyCard key={index} service={service} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

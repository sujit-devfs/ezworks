
import "./App.css";
import Header from "./components/Header";
import PropertyCard from "./components/PropertyCard";
import services from "./data.json";
import ContactForm from "./components/ContactForm";

function App() {

  return (
    <>
      <div className="main-container">
        <div className="header-container">
          <Header />
        </div>
        <div className="property-list">
          {services.map((service, index) => (
            <PropertyCard key={index} service={service} />
          ))}
        </div>
      </div>
      <div className="email-section">
        <ContactForm />
      </div>
    </>
  );
}

export default App;

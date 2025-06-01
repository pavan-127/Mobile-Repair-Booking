import {  useNavigate } from "react-router-dom";
import "../src/Homepage.css";
import './Footer.css';


const services = [
  
  { name: "Repair Phone", image: "/Repair1.avif" },
  
];

export default function HomePage() {

  const navigate = useNavigate();
  return (
    <>
    <div className="font-sans">
      {/* Banner */}
      <section className="bg-black text-white p-8 text-center">
        <h2 className="text-3xl font-bold">Refer & Earn 100Rs Cashback On Display And Motherboard Repair</h2>
       
       <button
      className="mt-4 bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-100"
      onClick={() => navigate("book-repair")}
    >
      Book Repair
    </button>   
        <p className="text-sm mt-2">*Min order value ₹1,000</p>
      </section>

      {/* Services */}
     <section className="services-section">
  <h3>Our Services</h3>
  <div className="services-grid">
    {services.map((service, index) => (
     <div className="service-card">
  <img src={service.image} alt={service.name} className="service-img" />
  <p>{service.name}</p>
</div>

    ))}
  </div>
</section>

<footer className="footer">
  <div className="footer-content">
    <p>&copy; 2025 Maponics. All rights reserved.</p>
    <p>Contact: support@maponics.in</p>
  </div>
</footer>


    </div>
    </>
  );
}

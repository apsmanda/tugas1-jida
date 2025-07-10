import { FiCode, FiSmartphone, FiPenTool, FiTrendingUp } from 'react-icons/fi';

export default function Services() {
  const services = [
    { icon: <FiCode size={32} />, title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat ex leo, nec feugiat eros volutpat in." },
    { icon: <FiSmartphone size={32} />, title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat ex leo, nec feugiat eros volutpat in." },
    { icon: <FiPenTool size={32} />, title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat ex leo, nec feugiat eros volutpat in." },
    { icon: <FiTrendingUp size={32} />, title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat ex leo, nec feugiat eros volutpat in." },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Layanan Kami</h2>
        <p className="section-subtitle">Digitalisasi bisnis</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
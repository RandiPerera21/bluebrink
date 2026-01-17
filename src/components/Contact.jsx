import AgentList from "../components/AgentList";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="page">

      <h1>Contact Us</h1>
      

      {/* Contact details*/}
      <section className="contact-main">
        <ContactForm />

        <div className="contact-info">
          <h3>Our Office</h3>
          <p>📍 25 St.Peters Road, Colombo 03</p>
          <p>📞 +94 111 946 946</p>
          <p>✉ info@bluebrink.co.lk</p>

          <h4>Office Hours</h4>
          <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
          <p>Sat: 10:00 AM – 4:00 PM</p>
        </div>
      </section>

      {/* Agents */}
      <section className="meet-agents">
        <h2>Meet Our Agents</h2>
        <p>
        Our experienced agents are here to help you with buying, selling,
        and renting properties. 
        </p>

        <AgentList />
      </section>

    </div>
  );
}      

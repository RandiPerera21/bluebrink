export default function AgentContactForm({ agent, onClose }) {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Contact {agent.name}</h2>
          <p className="agent-role">{agent.role}</p>
  
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea
              rows="4"
              placeholder={`Message for ${agent.name}`}
              required
            ></textarea>
  
            <div className="modal-actions">
              <button type="submit">Send Message</button>
              <button type="button" className="cancel" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
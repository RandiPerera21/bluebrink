import { useState } from "react";
import AgentContactForm from "./AgentContactForm";

const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Sales Agent",
    email: "sarah@bluebrink.co.lk",
    phone: "+94 11 1234 567",
    image: "${import.meta.env.BASE_URL}images/agents/agent1.webp"
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Lettings Specialist",
    email: "michael@bluebrink.co.lk",
    phone: "+94 11 1234 567",
    image: "${import.meta.env.BASE_URL}images/agents/agent2.webp"
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Property Consultant",
    email: "emma@bluebrink.co.lk",
    phone: "+94 11 1234 567",
    image: "${import.meta.env.BASE_URL}images/agents/agent3.png"
  },
  {
    id: 4,
    name: "David Lee",
    role: "Investment Advisor",
    email: "david@bluebrink.co.lk",
    phone: "+94 11 1234 567",
    image: "${import.meta.env.BASE_URL}images/agents/agent4.png"
  }
];

export default function AgentList() {
  const [selectedAgent, setSelectedAgent] = useState(null);

  return (
    <>
      <div className="agent-grid">
        {agents.map(agent => (
          <div className="agent-card" key={agent.id}>
            <img src={agent.image} alt={agent.name} />
            <h3>{agent.name}</h3>
            <p className="role">{agent.role}</p>
            <p>📧 {agent.email}</p>
            <p>📞 {agent.phone}</p>

            <button
              className="agent-btn"
              onClick={() => setSelectedAgent(agent)}
            >
              Contact Agent
            </button>
          </div>
        ))}
      </div>

      {/* Agent contact */}
      {selectedAgent && (
        <AgentContactForm
          agent={selectedAgent}
          onClose={() => setSelectedAgent(null)}
        />
      )}
    </>
  );
}

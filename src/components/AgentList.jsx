import AgentCard from "./AgentCard";

const agents = [
  {
    id: 1,
    name: "Sarah Williams",
    role: "Senior Sales Agent",
    phone: "+44 20 7123 4561",
    email: "sarah@homeharbor.co.uk",
    image: "/images/agents/agent1.jpg"
  },
  {
    id: 2,
    name: "Daniel Brown",
    role: "Lettings Specialist",
    phone: "+44 20 7123 4562",
    email: "daniel@homeharbor.co.uk",
    image: "/images/agents/agent2.jpg"
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Property Consultant",
    phone: "+44 20 7123 4563",
    email: "priya@homeharbor.co.uk",
    image: "/images/agents/agent3.jpg"
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Investment Advisor",
    phone: "+44 20 7123 4564",
    email: "michael@homeharbor.co.uk",
    image: "/images/agents/agent4.jpg"
  }
];

export default function AgentList() {
  return (
    <div className="agent-grid">
      {agents.map(agent => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}

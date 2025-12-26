import PropertyCard from "./PropertyCard";

export default function PropertyList({ properties }) {
  return (
    <div className="grid">
      {properties.map(p => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  );
}

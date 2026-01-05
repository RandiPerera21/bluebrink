describe('Search Filter Logic', () => {
    const properties = [
      { id: 1, type: "House", price: 37.5, bedrooms: 4, postcode: "Colombo 05" },
      { id: 2, type: "Flat", price: 24.0, bedrooms: 3, postcode: "Kandy 20000" },
      { id: 3, type: "House", price: 55.0, bedrooms: 5, postcode: "Gampaha" }
    ];
  
    test('filters properties by type', () => {
      const filtered = properties.filter(p => p.type.toLowerCase() === "house");
      expect(filtered).toHaveLength(2);
    });
  
    test('filters properties by price range', () => {
      const filtered = properties.filter(p => p.price >= 30 && p.price <= 50);
      expect(filtered).toHaveLength(1);
    });
  
    test('filters properties by bedrooms', () => {
      const filtered = properties.filter(p => p.bedrooms >= 4);
      expect(filtered).toHaveLength(2);
    });
  
    test('filters properties by postcode', () => {
      const filtered = properties.filter(p => 
        p.postcode.toLowerCase().includes("colombo")
      );
      expect(filtered).toHaveLength(1);
    });
  
    test('returns empty array when no match', () => {
      const filtered = properties.filter(p => p.price > 100);
      expect(filtered).toHaveLength(0);
    });
  });
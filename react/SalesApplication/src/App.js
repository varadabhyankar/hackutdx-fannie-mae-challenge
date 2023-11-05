import React from 'react';
import './App.css';
import PropertyCard from './components/PropertyCard';

const propertyData = [
  { name: 'Property 1', price: '$100,000' },
  { name: 'Property 2', price: '$150,000' },
  // Add more property data as needed
];

function App() {
  return (
    <div className="app">
      {propertyData.map((property, index) => (
        <PropertyCard key={index} name={property.name} price={property.price} />
      ))}
    </div>
  );
}

export default App;

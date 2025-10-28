import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#90bbe3' }}
      className="text-white py-4 mt-6"
    >
      <div className="container mx-auto text-center text-lg font-medium text-white">
        <p>
          Pizzaria Borcelle © {new Date().getFullYear()}{" "}
        </p>
      </div>
    </footer>
  );
}

import React from 'react';

export default function Contato() {
  return (
    <div className="pt-20 max-w-xl mx-auto">
      <h2
        className="text-3xl font-bold mb-6 text-center"
        style={{ color: "#386189" }}
      >
        Contato
      </h2>
      <div className="bg-white p-6 rounded shadow">
        <p className="mb-2">📞 Telefone: (11) 99999-9999</p>
        <p className="mb-2">✉️ Email: contato@pizzariaborcelle.com</p>
        <p className="text-sm text-gray-600">Atendimento das 18:00 às 23:00</p>
      </div>
    </div>
  );
}

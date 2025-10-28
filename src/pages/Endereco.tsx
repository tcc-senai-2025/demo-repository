import React from "react";

export default function Endereco() {
  return (
    <div className="pt-20 max-w-xl mx-auto">
      <h2
        className="text-3xl font-bold mb-6 text-center"
        style={{ color: "#386189" }}
      >
        📍 Endereço
      </h2>
      <div className="bg-white p-6 rounded shadow text-center">
        <p className="text-lg font-semibold text-gray-800">
          SENAI Almirante Tamandaré
        </p>
        <p className="text-gray-700 mt-2">
          Rua Professor Ozório Duque Estrada, 370<br />
          Centro, Almirante Tamandaré - PR<br />
          CEP: 83501-160
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Atendimento no local — não realizamos entregas.
        </p>
      </div>
    </div>
  );
}

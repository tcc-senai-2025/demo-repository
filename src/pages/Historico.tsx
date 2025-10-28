import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Historico() {
  const [pedidos, setPedidos] = useState<any[]>([]);

  useEffect(() => {
    api.get("/pedidos") // busca todos os pedidos
      .then(res => setPedidos(res.data))
      .catch(err => console.error(err));
  }, []);

  if (pedidos.length === 0) return <p>Não há pedidos ainda.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Histórico de Pedidos</h1>
      <div className="bg-white p-6 rounded shadow">
        {pedidos.map(p => (
          <div key={p.id} className="border-b border-gray-200 pb-4 mb-4">
            <p><strong>Pedido:</strong> {p.id}</p>
            <p><strong>Data:</strong> {new Date(p.criadoEm).toLocaleString()}</p>
            <p><strong>Total:</strong> R$ {p.total.toFixed(2)}</p>
            <ul className="ml-4 list-disc">
              {p.itens.map((i: any) => (
                <li key={i.cartId}>{i.nome} - R$ {i.preco.toFixed(2)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import api from "../services/api";
import Swal from 'sweetalert2';

export default function MonteSuaPizza() { 
  const [ingredientes, setIngredientes] = useState<any>({ massas: [], molhos: [], adicionais: [] });
  const [massa, setMassa] = useState<string>("massa-tradicional");
  const [molho, setMolho] = useState<string>("molho-tomate");
  const [adicionais, setAdicionais] = useState<string[]>([]);
  const [tamanho, setTamanho] = useState<string>("Grande");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/ingredientes")
      .then(r => { setIngredientes(r.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const toggle = (id: string) => {
    setAdicionais(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const enviar = async () => {
    try {
      const payload = { tamanho, massaId: massa, molhoId: molho, adicionais };
      await api.post("/monte-sua-pizza", payload);

      Swal.fire({
        title: 'Pizza adicionada!',
        text: 'Sua pizza personalizada foi adicionada ao carrinho com sucesso!',
        icon: 'success' ,
        background: '#fff',      
        color: '#000',               
        confirmButtonText: 'Beleza!', 
        confirmButtonColor: '#386189' 
      });
    } catch (e) {
      alert("Erro ao montar a pizza");
    }
  };

  if (loading) return <div className="bg-white p-4 rounded shadow">Carregando ingredientes...</div>;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h4 className="font-semibold text-lg mb-2">Monte sua pizza</h4>

      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">Tamanho</label>
          <select value={tamanho} onChange={e => setTamanho(e.target.value)} className="w-full p-2 border rounded">
            <option>Pequena</option>
            <option>Média</option>
            <option>Grande</option>
            <option>Família</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Massa</label>
          <select value={massa} onChange={e => setMassa(e.target.value)} className="w-full p-2 border rounded">
            {ingredientes.massas.map((m: any) => (
              <option key={m.id} value={m.id}>{m.nome} {m.preco ? `(+R$ ${m.preco})` : ''}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3">
        <label className="block text-sm font-medium">Molho</label>
        <select value={molho} onChange={e => setMolho(e.target.value)} className="w-full p-2 border rounded">
          {ingredientes.molhos.map((m: any) => (
            <option key={m.id} value={m.id}>{m.nome} {m.preco ? `(+R$ ${m.preco})` : ''}</option>
          ))}
        </select>
      </div>

      <div className="mt-3">
        <label className="block text-sm font-medium mb-1">Adicionais</label>
        <div className="grid gap-2 grid-cols-2">
          {ingredientes.adicionais.map((a: any) => (
            <label key={a.id} className="inline-flex items-center gap-2 p-2 border rounded cursor-pointer">
              <input type="checkbox" checked={adicionais.includes(a.id)} onChange={() => toggle(a.id)} />
              <span className="text-sm">{a.nome} {a.preco ? `(+R$ ${a.preco})` : ''}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={enviar}
          className="text-white px-4 py-2 rounded"
          style={{ backgroundColor: '#386189' }}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}

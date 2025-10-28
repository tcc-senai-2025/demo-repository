import React, { useEffect, useState, useMemo } from "react";
import api from "../services/api";

export default function MonteSuaPizza() {
  const [ingredientes, setIngredientes] = useState<any>({
    massas: [],
    molhos: [],
    adicionais: [],
  });
  const [massa, setMassa] = useState<string>("massa-tradicional");
  const [molho, setMolho] = useState<string>("molho-tomate");
  const [adicionais, setAdicionais] = useState<string[]>([]);
  const [tamanho, setTamanho] = useState<string>("Grande");
  const [pizzaCount, setPizzaCount] = useState<number>(0);

  useEffect(() => {
    api
      .get("/ingredientes")
      .then((r) => setIngredientes(r.data))
      .catch(() => {});
  }, []);

  const toggle = (id: string) => {
    setAdicionais((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  
  const preco = useMemo(() => {
    let total = 0;
    // preço base pelo tamanho
    if (tamanho === "Pequena") total += 25;
    if (tamanho === "Média") total += 35;
    if (tamanho === "Grande") total += 45;
    if (tamanho === "Família") total += 55;

    const m = ingredientes.massas.find((x: any) => x.id === massa);
    if (m) total += m.preco || 0;

    const ml = ingredientes.molhos.find((x: any) => x.id === molho);
    if (ml) total += ml.preco || 0;

    adicionais.forEach((id) => {
      const a = ingredientes.adicionais.find((x: any) => x.id === id);
      if (a) total += a.preco || 0;
    });

    return total;
  }, [tamanho, massa, molho, adicionais, ingredientes]);

  const enviar = async () => {
    try {
      const payload = { tamanho, massaId: massa, molhoId: molho, adicionais };
      await api.post("/monte-sua-pizza", payload);
      setPizzaCount((prev) => prev + 1); 
      alert("Pizza personalizada adicionada ao carrinho!");
    } catch (e) {
      alert("Erro ao montar a pizza");
    }
  };

  return (
    <div className="relative bg-white p-4 rounded shadow">
      <div className="absolute top-2 right-2 bg-red-600 text-white text-sm px-3 py-1 rounded-full shadow">
        🍕 Criadas: {pizzaCount}
      </div>

      <h4 className="font-semibold text-lg mb-2">Monte sua pizza</h4>

      <div className="mb-3">
        <label className="block text-sm font-medium">Tamanho</label>
        <select
          value={tamanho}
          onChange={(e) => setTamanho(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option>Pequena</option>
          <option>Média</option>
          <option>Grande</option>
          <option>Família</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium">Massa</label>
        <select
          value={massa}
          onChange={(e) => setMassa(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {ingredientes.massas.map((m: any) => (
            <option key={m.id} value={m.id}>
              {m.nome} {m.preco ? `(+R$ ${m.preco})` : ""}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium">Molho</label>
        <select
          value={molho}
          onChange={(e) => setMolho(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {ingredientes.molhos.map((ml: any) => (
            <option key={ml.id} value={ml.id}>
              {ml.nome} {ml.preco ? `(+R$ ${ml.preco})` : ""}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Adicionais</label>
        <div className="grid gap-2 grid-cols-2">
          {ingredientes.adicionais.map((a: any) => (
            <label
              key={a.id}
              className="inline-flex items-center gap-2 p-2 border rounded cursor-pointer"
            >
              <input
                type="checkbox"
                checked={adicionais.includes(a.id)}
                onChange={() => toggle(a.id)}
              />
              <span className="text-sm">
                {a.nome} {a.preco ? `(+R$ ${a.preco})` : ""}
              </span>
            </label>
          ))}
        </div>
      </div>

      <p className="mt-3 text-lg font-bold text-green-600">
        Preço Atual: R$ {preco.toFixed(2)}
      </p>

      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={enviar}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}

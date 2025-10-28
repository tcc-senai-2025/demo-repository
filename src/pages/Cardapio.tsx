import React, { useEffect, useState } from "react";
import api from "../services/api";
import MonteSuaPizza from "../components/MonteSuaPizza";
import Swal from "sweetalert2";

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  tamanho?: string;
  categoria: string;
  imagem?: string;
  adicionais?: any[];
}

type Adicional = { id: string; nome: string; preco: number };

export default function Cardapio() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/produtos")
      .then((r) => {
        setProdutos(r.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categorias = [
    "Pizza Salgada",
    "Pizza Doce",
    "Bebida",
    "Sobremesa",
    "Acompanhamento",
  ];

  const imagensCategorias: Record<string, string> = {
    "Pizza Salgada": "src/img/icon-pizza.png",
    "Pizza Doce": "src/img/icon-pizza-doce.png",
    "Bebida": "src/img/icon-bebida.png",
    "Sobremesa": "src/img/icon-doce.png",
    "Acompanhamento": "src/img/icon-batata.png",
  };

  const ingredientesSalgadas: Adicional[] = [
    { id: "mussarela", nome: "Mussarela", preco: 3.0 },
    { id: "calabresa", nome: "Calabresa", preco: 4.0 },
    { id: "bacon", nome: "Bacon", preco: 4.5 },
    { id: "frango", nome: "Frango Desfiado", preco: 3.5 },
    { id: "cebola", nome: "Cebola", preco: 1.0 },
    { id: "milho", nome: "Milho", preco: 1.0 },
    { id: "azeitona", nome: "Azeitona", preco: 1.5 },
    { id: "oregano", nome: "Orégano", preco: 0.5 },
  ];

  if (loading) return <p className="text-center">Carregando cardápio...</p>;

  const handleAdicionar = async (p: Produto) => {
    if (p.categoria === "Pizza Salgada") {
      const { value: formValues } = await Swal.fire({
        title: `Personalize sua ${p.nome}`,
        html: `
          <div style="text-align:left; font-family: Georgia, 'Times New Roman', Times, serif;">
            <label style="font-weight:bold; display:block; margin-bottom:5px;">Tamanho:</label>
            <select id="swal-tamanho" style="width:100%; padding:8px; border-radius:8px; border:1px solid #ccc; margin-bottom:15px;">
              <option value="Pequena">Pequena</option>
              <option value="Média">Média</option>
              <option value="Grande" selected>Grande</option>
            </select>
          </div>
          <div style="text-align:left; margin-top:10px; font-family: Georgia, 'Times New Roman', Times, serif;">
            <label style="font-weight:bold; display:block; margin-bottom:5px;">Adicionais:</label>
            ${ingredientesSalgadas
              .map(
                (a) => `
              <div style="border:1px solid #ccc; padding:8px; border-radius:8px; margin-bottom:5px; display:flex; align-items:center;">
                <input type="checkbox" id="adicional-${a.id}" value="${a.id}" style="margin-right:10px;" />
                <label for="adicional-${a.id}">${a.nome} (+R$ ${a.preco.toFixed(
                  2
                )})</label>
              </div>
            `
              )
              .join("")}
          </div>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Adicionar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#386189",
        cancelButtonColor: "#ccc",
        background: "#fff",
        color: "#000",
        preConfirm: () => {
          const tamanho = (
            document.getElementById("swal-tamanho") as HTMLSelectElement
          ).value;
          const adicionais: Adicional[] = ingredientesSalgadas.filter(
            (a) =>
              (
                document.getElementById(
                  `adicional-${a.id}`
                ) as HTMLInputElement
              ).checked
          );
          return { tamanho, adicionais };
        },
      });

      if (!formValues) return;

      const { tamanho, adicionais } = formValues;

const adicionaisSelecionados: Adicional[] = adicionais.length > 0 ? adicionais : [];
const precoTotal =
  p.preco +
  adicionaisSelecionados.reduce(
    (soma: number, adicional: Adicional) => soma + (adicional.preco || 0),
    0
  );


      const nomeCompleto =
        adicionaisSelecionados.length > 0
          ? `${p.nome} (${tamanho}) + ${adicionaisSelecionados
              .map((a: Adicional) => a.nome)
              .join(", ")}`
          : `${p.nome} (${tamanho})`;

      await api.post("/carrinho", {
        id: p.id,
        nome: nomeCompleto,
        tamanho,
        quantidade: 1,
        adicionais: adicionaisSelecionados,
        preco: precoTotal,
      });

      Swal.fire({
        title: "🍕 Adicionado!",
        text: `${p.nome} foi adicionado ao carrinho.`,
        icon: "success",
        confirmButtonColor: "#386189",
        background: "#fff",
        color: "#000",
      });
    } else {
      await api.post("/carrinho", {
        id: p.id,
        nome: p.nome,
        preco: p.preco,
        quantidade: 1,
      });
      Swal.fire({
        title: "🍕 Adicionado!",
        text: `${p.nome} foi adicionado ao carrinho.`,
        icon: "success",
        confirmButtonColor: "#386189",
        background: "#fff",
        color: "#000",
      });
    }
  };

  return (
    <div className="p-20">
      <div className="mb-8">
        <MonteSuaPizza />
      </div>

      {categorias.map((cat) => {
        const itens = produtos.filter((p) => p.categoria === cat);
        return (
          <div key={cat} className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <img
                src={imagensCategorias[cat]}
                alt={cat}
                className="w-14 h-14 rounded-full object-cover"
                style={{ border: "2px solid #386189" }}
              />
              <h2
                className="text-2xl font-bold pb-1"
                style={{ borderBottom: "2px solid #386189", color: "#386189" }}
              >
                {cat}
              </h2>
            </div>

            {itens.length === 0 ? (
              <p className="text-gray-500 italic">
                Nenhum item nesta categoria.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {itens.map((p) => {
                  const imagemFinal =
                    p.imagem?.trim() !== "" ? p.imagem : "/img/padrao.png";
                  const precoFormatado =
                    typeof p.preco === "number"
                      ? p.preco.toFixed(2)
                      : "0.00";
                  return (
                    <div
                      key={p.id}
                      className="p-4 border rounded-xl shadow hover:shadow-lg transition bg-white flex flex-col justify-between"
                      style={{ height: "100%" }}
                    >
                      <div>
                        <img
                          src={imagemFinal}
                          alt={p.nome}
                          className="w-full h-40 object-cover rounded mb-2"
                        />
                        <h3
                          className="text-xl font-semibold"
                          style={{ color: "#386189" }}
                        >
                          {p.nome}
                        </h3>
                        <p className="text-gray-600">{p.descricao}</p>
                        <p
                          className="font-bold mt-2"
                          style={{ color: "#386189" }}
                        >
                          R$ {precoFormatado}
                        </p>
                      </div>
                      <button
                        onClick={() => handleAdicionar(p)}
                        className="mt-3 w-full py-2 rounded-lg text-white"
                        style={{ backgroundColor: "#386189" }}
                      >
                        Adicionar
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

import React, { useEffect, useState, useMemo } from "react";
import api from "../services/api";
import Swal from "sweetalert2";
 
export default function Carrinho() {
  const [itens, setItens] = useState<any[]>([]);
 
  const carregar = () =>
    api
      .get("/carrinho")
      .then((r) => setItens(r.data))
      .catch(() => setItens([]));
 
  useEffect(() => {
    carregar();
  }, []);
 
  const remover = async (cartId: number) => {
    await api.delete(`/carrinho/${cartId}`);
    setItens((prev) => prev.filter((i) => i.cartId !== cartId));
    Swal.fire({
      icon: "success",
      title: "Removido!",
      text: "Item removido do carrinho.",
      background: "#ffffff",
      color: "#000000",
      confirmButtonColor: "#386189",
      confirmButtonText: "Ok",
    });
  };
 
  const limpar = async () => {
    await api.delete("/carrinho");
    setItens([]);
    Swal.fire({
      icon: "success",
      title: "Carrinho esvaziado!",
      background: "#ffffff",
      color: "#000000",
      confirmButtonColor: "#386189",
      confirmButtonText: "Ok",
    });
  };
 
  const gerarSenha = () => {
    return Math.floor(1000 + Math.random() * 9000).toString(); // 4 dígitos
  };
 
  const finalizar = async () => {
    if (itens.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Carrinho vazio",
        text: "Adicione produtos antes de finalizar o pedido.",
        background: "#ffffff",
        color: "#000000",
        confirmButtonColor: "#386189",
        confirmButtonText: "Ok",
      });
      return;
    }
 
    const { value: forma } = await Swal.fire({
      title: 'Escolha a forma de pagamento',
      html: `
        <div style="display:flex; flex-direction: column; gap:10px; text-align:left;">
          <label style="border:1px solid #ccc; padding:8px; border-radius:5px;">
            <input type="radio" name="pagamento" value="dinheiro"> Dinheiro
          </label>
          <label style="border:1px solid #ccc; padding:8px; border-radius:5px;">
            <input type="radio" name="pagamento" value="cartao"> Cartão
          </label>
          <label style="border:1px solid #ccc; padding:8px; border-radius:5px;">
            <input type="radio" name="pagamento" value="pix"> Pix
          </label>
        </div>
      `,
      preConfirm: () => {
        const selected = (document.querySelector('input[name="pagamento"]:checked') as HTMLInputElement)?.value;
        if (!selected) Swal.showValidationMessage('Você precisa escolher uma forma de pagamento!');
        return selected;
      },
      background: "#ffffff",
      color: "#000000",
      confirmButtonColor: "#386189",
      confirmButtonText: "Continuar",
    });
 
    if (!forma) return;
 
    let detalhePagamento = '';
 
    if (forma === 'cartao') {
      // 2ª etapa: débito ou crédito
      const { value: tipo } = await Swal.fire({
        title: 'Cartão',
        html: `
          <div style="display:flex; flex-direction: column; gap:10px; text-align:left;">
            <label style="border:1px solid #ccc; padding:8px; border-radius:5px;">
              <input type="radio" name="tipoCartao" value="Débito"> Débito
            </label>
            <label style="border:1px solid #ccc; padding:8px; border-radius:5px;">
              <input type="radio" name="tipoCartao" value="Crédito"> Crédito
            </label>
          </div>
        `,
        preConfirm: () => {
          const selected = (document.querySelector('input[name="tipoCartao"]:checked') as HTMLInputElement)?.value;
          if (!selected) Swal.showValidationMessage('Escolha Débito ou Crédito!');
          return selected;
        },
        background: "#ffffff",
        color: "#000000",
        confirmButtonColor: "#386189",
        confirmButtonText: "Confirmar",
      });
 
      if (!tipo) return;
      detalhePagamento = tipo;
 
    } else if (forma === 'dinheiro') {
      await Swal.fire({
        title: 'Pagamento em dinheiro',
        html: 'Por favor, chame o garçom ou vá até ele para efetuar o pagamento.',
        icon: 'info',
        background: "#ffffff",
        color: "#000000",
        confirmButtonColor: "#386189",
        confirmButtonText: "Ok",
      });
      detalhePagamento = 'Dinheiro (garçom)';
    } else {
      detalhePagamento = 'Pix';
    }
 
    const cliente = { nome: "Cliente Teste", telefone: "0000", endereco: "Rua X" };
    const res = await api.post("/pedidos", { cliente, pagamento: detalhePagamento }).catch(() => null);
 
    if (res && res.data && res.data.pedido) {
      const senha = gerarSenha();
      setItens([]);
      Swal.fire({
        icon: "success",
        title: "Pedido finalizado!",
        html: `Seu pedido foi enviado com sucesso.<br>Senha do pedido: <b>${senha}</b><br>Pagamento: ${detalhePagamento}`,
        background: "#ffffff",
        color: "#000000",
        confirmButtonColor: "#386189",
        confirmButtonText: "Beleza!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Não foi possível finalizar o pedido.",
        background: "#ffffff",
        color: "#000000",
        confirmButtonColor: "#386189",
        confirmButtonText: "Ok",
      });
    }
  };
 
  const total = useMemo(
    () => itens.reduce((s, i) => s + i.preco * (i.quantidade || 1), 0),
    [itens]
  );
 
  return (
    <div>
      <h2
        className="text-3xl font-bold mb-6 text-center pt-20"
        style={{ color: "#386189" }}
      >
        🛒 Carrinho
      </h2>
 
      {itens.length === 0 ? (
        <p className="text-center text-gray-600">Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {itens.map((item) => (
              <li
                key={item.cartId}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
              >
                <div>
                  <p className="font-semibold" style={{ color: "#386189" }}>
                    {item.nome}{" "}
                    <span className="text-sm text-gray-500">({item.tamanho})</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Qtd: {item.quantidade || 1}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-bold" style={{ color: "#386189" }}>
                    R$ {(item.preco * (item.quantidade || 1)).toFixed(2)}
                  </p>
                  <button
                    onClick={() => remover(item.cartId)}
                    className="text-sm bg-[#386189] text-white px-3 py-1 rounded"
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
 
          <div className="mt-6 text-right">
            <p className="text-xl font-bold" style={{ color: "#386189" }}>
              Total: R$ {total.toFixed(2)}
            </p>
            <div className="flex justify-end gap-3 mt-3">
              <button
                onClick={limpar}
                className="bg-gray-600 text-white px-4 py-2 rounded"
              >
                Esvaziar
              </button>
              <button
                onClick={finalizar}
                className="bg-[#386189] text-white px-4 py-2 rounded"
              >
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
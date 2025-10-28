import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo1.png";
import {
  FaShoppingCart,
  FaPizzaSlice,
  FaPhone,
  FaMapMarkerAlt,
  FaHistory,
} from "react-icons/fa";
import "./Header.css";

export default function Header({ qtdCarrinho = 0 }) {
  return (
    <header
      style={{ backgroundColor: "#90bbe3" }}
      className="fixed top-0 left-0 h-full w-20 shadow flex flex-col items-center py-4 z-50"
    >
      {/* Logo */}
      <img
        src={Logo}
        alt="Pizzaria Borcelle"
        className="h-16 w-auto mb-6"
      />

      {/* Ícones de navegação */}
      <nav className="flex flex-col items-center space-y-5 text-white">
        {/* Cardápio */}
        <Link to="/" title="Cardápio" className="hover:scale-110 transition-transform">
          <FaPizzaSlice size={20} />
        </Link>

        {/* Carrinho */}
        <Link to="/carrinho" title="Carrinho" className="relative hover:scale-110 transition-transform">
          <div className="relative flex items-center justify-center">
            <FaShoppingCart size={28} color="white" />
            {qtdCarrinho > 0 && (
              <span
                className="absolute text-[10px] font-bold text-white bg-red-600 w-4 h-4 rounded-full flex items-center justify-center"
                style={{ top: "4px", right: "4px" }}
              >
                {qtdCarrinho}
              </span>
            )}
          </div>
        </Link>

        {/* Histórico de pedidos */}
        <Link to="/historico" title="Histórico de Pedidos" className="hover:scale-110 transition-transform">
          <FaHistory size={20} />
        </Link>

        {/* Contato */}
        <Link to="/contato" title="Contato" className="hover:scale-110 transition-transform">
          <FaPhone size={20} />
        </Link>

        {/* Endereço */}
        <Link to="/endereco" title="Endereço" className="hover:scale-110 transition-transform">
          <FaMapMarkerAlt size={20} />
        </Link>
      </nav>
    </header>
  );
}

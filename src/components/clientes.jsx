import React from "react";
import "./Clientes.css";

const clientes = [
  {
    nombre: "Comedores Industriales",
    logo: `${import.meta.env.BASE_URL}/wp_about.jpg`,
  },
  {
    nombre: "Supermercados y tiendas de autoservicio",
    logo: `${import.meta.env.BASE_URL}/chedrahui-logo.jpg`,
  },
  {
    nombre: "Restaurantes y cadenas de comida",
    logo: `${import.meta.env.BASE_URL}/toks-logo.jpg`,
  },
  {
    nombre: "Pequeñas y medianas empresas",
    logo: `${import.meta.env.BASE_URL}/lamoderna-logo.jpg`,
  },
];

const Clientes = () => {
  return (
    <section className="clientes-section">
      <h2 className="clientes-titulo">Nuestros Clientes</h2>
      <div className="clientes-grid">
        {clientes.map((cliente, index) => (
          <div key={index} className="cliente-card">
            <img
              src={cliente.logo}
              alt={cliente.nombre}
              className="cliente-logo"
            />
            <h3 className="cliente-nombre">{cliente.nombre}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clientes;

import React from "react";

const Busqueda = ({ setFiltro }) => {
  const inputLook = (e) => {
    const buscarContenido = e.target.value;
    setFiltro(buscarContenido);
  };

  return (
    <div className="buscador col col-md-6">
      <input
        type="text"
        name="buscador"
        id="buscador"
        placeholder="Buscar personaje"
        className="form-control mb-3 buscador-css"
        onChange={inputLook}
      />
    </div>
  );
};

export default Busqueda;

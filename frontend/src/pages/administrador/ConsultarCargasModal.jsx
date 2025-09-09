import React from "react";
// import Modal from "./Modal.jsx";
import Modal from "./../../components/modalunico/Modal.jsx";


const ConsultarCargasModal = ({ onClose }) => (
  <Modal title="Consultar Cargas por Yarda" onClose={onClose}>
    <p>Listado y filtros para consultar cargas por yarda.</p>
    {/* Aquí incluye tablas o filtros */}
  </Modal>
);

export default ConsultarCargasModal;
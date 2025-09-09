import React from "react";
import Modal from "./../../components/modalunico/Modal.jsx";

const AdministrarUsuariosModal = ({ onClose }) => (
  <Modal title="Administrar Usuarios / Yardas / Créditos" onClose={onClose}>
    <p>Gestión de usuarios, yardas y créditos.</p>
    {/* Incluye formularios o tablas aquí */}
  </Modal>
);

export default AdministrarUsuariosModal;
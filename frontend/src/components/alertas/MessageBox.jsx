// src/components/MessageBox.jsx

import React from 'react';

/**
 * Componente para mostrar mensajes al usuario en una caja flotante.
 * @param {object} props Las propiedades del componente.
 * @param {string} props.message El texto del mensaje a mostrar.
 * @param {'success' | 'error'} props.type El tipo de mensaje (determina el color).
 * @param {function} props.onClose La función para cerrar el mensaje.
 */
const MessageBox = ({ message, type, onClose }) => {
  const color = type === 'error' ? 'bg-red-500' : 'bg-green-500';
  return (
    <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 p-4 rounded-lg shadow-lg text-white font-bold ${color} z-50 transition-opacity duration-300`}>
      {message}
      <button onClick={onClose} className="ml-4 font-bold">X</button>
    </div>
  );
};

export default MessageBox;

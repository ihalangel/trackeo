// src/services/user/registerUser.js

/**
 * Función para registrar un nuevo usuario a través de la API.
 * @param {string} email El correo electrónico del usuario.
 * @param {string} password La contraseña del usuario.
 * @returns {Promise<object>} El objeto de respuesta de la API.
 */
import {linkApp} from './../../../generales/configuracion.jsx'


export const registerUser = async (nombre, email, password, rol) => {
  const response = await fetch(`${linkApp}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, email, password, rol }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Error al registrarse.");
  }
  return data;
};
/**
 * Función para iniciar sesión de un usuario a través de la API.
 * @param {string} email El correo electrónico del usuario.
 * @param {string} password La contraseña del usuario.
 * @returns {Promise<object>} El objeto de respuesta de la API.
 */
export const loginUser = async (loginValue, password) => {
  const response = await fetch(`${linkApp}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ loginValue, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Credenciales inválidas.");
  }
  return data;
};




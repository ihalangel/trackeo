// // src/hooks/useAuth.js

// import { useState } from 'react';
// import { loginUser, registerUser } from './../../services/user/registerUser.jsx';

// /**
//  * Hook personalizado para manejar la lógica de autenticación.
//  * @returns {object} Un objeto con funciones y estados de autenticación.
//  */
// export const useAuth = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const login = async (loginValue, password) => {
//     setLoading(true);
//     setError(null);
//     setSuccess(null);
//     try {
//       const data = await loginUser(loginValue, password);
//       setSuccess("¡Inicio de sesión exitoso!");
//       return data;
//     } catch (err) {
//       setError(err.message);
//       console.error("Login error:", err);
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const register = async (nombre, email, password, rol) => {
//   setLoading(true);
//   setError(null);
//   setSuccess(null);
//   try {
//     const data = await registerUser(nombre, email, password, rol);
//     setSuccess("¡Registro exitoso! Por favor, inicia sesión.");
//     return data;
//   } catch (err) {
//     setError(err.message);
//     throw err;
//   } finally {
//     setLoading(false);
//   }
// };


//   return { loading, error, success, login, register, setError };
// };

















































// src/hooks/useAuth.js
import { useState } from 'react';
import { loginUser, registerUser } from './../../services/user/registerUser.jsx';
import { useAuthContext } from './../../context/AuthContext.jsx';

export const useAuth = () => {
  const { setUser } = useAuthContext(); // obtener setUser desde contexto
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const login = async (loginValue, password) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const data = await loginUser(loginValue, password);
      setUser(data.user); // guardar usuario en contexto
      setSuccess("¡Inicio de sesión exitoso!");
      return data.user; // devolver usuario para uso en el componente
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (nombre, email, password, rol) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const data = await registerUser(nombre, email, password, rol);
      setSuccess("¡Registro exitoso! Por favor, inicia sesión.");
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, login, register, setError };
};

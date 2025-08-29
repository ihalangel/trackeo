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

















































// // src/hooks/useAuth.js
// import { useState } from 'react';
// import { loginUser, registerUser } from './../../services/user/registerUser.jsx';
// import { useAuthContext } from './../../context/AuthContext.jsx';



// export const useAuth = () => {
//   const { login } = useAuthContext();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const loginUser = async (loginValue, password) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const data = await loginUser(loginValue, password); // llamada a servicio
//       login(data.token, data.user);
//       return data.user;
//     } catch (error) {
//       setError(error.message);
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const register = async (nombre, email, password, rol) => {
//     setLoading(true);
//     setError(null);
//     setSuccess(null);
//     try {
//       const data = await registerUser(nombre, email, password, rol);
//       setSuccess("¡Registro exitoso! Por favor, inicia sesión.");
//       return data;
//     } catch (err) {
//       setError(err.message);
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { loginUser, loading, error };
// };











































import { useState } from 'react';
import { loginUser as loginUserService, registerUser } from './../../services/user/registerUser.jsx';
import { useAuthContext } from './../../context/AuthContext.jsx';

export const useAuth = () => {
  const { login } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const loginUser = async (loginValue, password) => {
    setLoading(true);
    setError(null);
    try {
      // Aquí se llama a la función de servicio, no a sí misma
      const data = await loginUserService(loginValue, password);
      login(data.token, data.user); // Actualiza el contexto
      return data.user;
    } catch (error) {
      setError(error.message);
      throw error;
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

  return { loginUser, register, loading, error, success, setError };
};

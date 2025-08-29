// import React, { createContext, useState, useContext } from 'react'

// const AuthContext = createContext(null)

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null)

//   const login = (userData) => setUser(userData)
//   const logout = () => setUser(null)

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export function useAuth() {
//   const context = useContext(AuthContext)
//   if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider')
//   return context
// }


// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // Estado del usuario
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Aquí podrías cargar el usuario almacenado en localStorage o cookie
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) setUser(storedUser);
//     setLoading(false);
//   }, []);

//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem('user', JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };




// import React, { createContext, useState, useEffect, useContext } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) setUser(storedUser);
//     setLoading(false);
//   }, []);

//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem('user', JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Aquí exportamos el hook que debes usar para consumir el contexto
// export const useAuthContext = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuthContext debe usarse dentro de un AuthProvider");
//   return context;
// };





















































// import React, { createContext, useState, useEffect, useContext } from 'react';
// import jwtDecode from 'jwt-decode';

// const AuthContext = createContext();



// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Validar token y cargar usuario al iniciar
//   useEffect(() => {
//   async function validateToken() {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       try {
//         const decoded = jwtDecode(storedToken);
//         const isExpired = decoded.exp * 1000 < Date.now();
//         if (!isExpired) {
//           setToken(storedToken);
//           setUser({ 
//             id: decoded.id, 
//             nombre: decoded.nombre, 
//             rol: decoded.rol,
//             email: decoded.email,
//           });
//         } else {
//           localStorage.removeItem('token');
//           localStorage.removeItem('user');
//           setToken(null);
//           setUser(null);
//         }
//       } catch (error) {
//         console.error("Error decoding token", error);
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//         setToken(null);
//         setUser(null);
//       }
//     }
//     setLoading(false);
//   }
//   validateToken();
// }, []);

//   const login = (token, userData) => {
//     setToken(token);
//     setUser(userData);
//     localStorage.setItem('token', token);
//     localStorage.setItem('user', JSON.stringify(userData));
//   };

//   const logout = () => {
//     setToken(null);
//     setUser(null);
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuthContext = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuthContext debe usarse dentro de un AuthProvider");
//   return context;
// };
















































import React, { createContext, useState, useEffect, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // En AuthProvider - dentro de validateToken:
    console.log("Componente montado y useEffect ejecutado");
async function validateToken() {
  const storedToken = localStorage.getItem('token');
  console.log("AuthProvider: token desde localStorage", storedToken);
  if (storedToken) {
    try {
      const decoded = jwtDecode(storedToken);
      console.log("AuthProvider: token decodificado", decoded);
      const isExpired = decoded.exp * 1000 < Date.now();
      console.log("AuthProvider: ¿token expirado?", isExpired);
      if (!isExpired) {
        setToken(storedToken);
        setUser({
          id: decoded.id,
          nombre: decoded.nombre,
          rol: decoded.rol,
          email: decoded.email,
        });
        console.log("AuthProvider: usuario seteado", decoded);
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
        console.log("AuthProvider: token expirado eliminado");
      }
    } catch (error) {
      console.error("AuthProvider: error decodificando token", error);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setToken(null);
      setUser(null);
    }
  } else {
    console.log("AuthProvider: no hay token en localStorage");
  }
  setLoading(false);
  console.log("AuthProvider: loading false");
}

    validateToken();
  }, []);

  const login = (token, userData) => {
    setToken(token);
    setUser(userData);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuthContext debe usarse dentro de un AuthProvider");
  return context;
};

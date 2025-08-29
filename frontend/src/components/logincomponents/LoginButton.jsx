// import React, { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

// const LoginFlow = () => {
//   const [step, setStep] = useState(0);
//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");
//   const [registering, setRegistering] = useState(false);
//   const [regEmail, setRegEmail] = useState("");
//   const [regPass, setRegPass] = useState("");

//   const handleStartClick = () => setStep(1);

//   const handleUserContinue = () => user.trim() && setStep(2);

//   const handleRegisterClick = () => {
//     setRegistering(true);
//     setStep(2);
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     alert(`Login usuario: ${user} pass: ${password}`);
//   };

//   const handleRegisterSubmit = (e) => {
//     e.preventDefault();
//     alert(`Registro email: ${regEmail} pass: ${regPass}`);
//   };

//   return (
//     <div className="max-w-[320px] mx-auto">
//       {step === 0 && (
//         <button
//           onClick={handleStartClick}
//           className="w-full py-3 bg-emerald-500 text-white rounded-xl text-lg cursor-pointer mt-3 hover:bg-emerald-600 transition-colors"
//         >
//           Iniciar Sesión
//         </button>
//       )}

//       {step === 1 && (
//         <>
//           <div className="flex gap-0">
//             <input
//               type="text"
//               placeholder="Usuario o correo"
//               value={user}
//               onChange={(e) => setUser(e.target.value)}
//               className="flex-grow py-2.5 px-3 text-base rounded-l-xl border border-emerald-500 focus:outline-none"
//               style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
//             />
//             <button
//               onClick={handleUserContinue}
//               aria-label="Continuar"
//               className="px-4 py-2.5 bg-emerald-500 rounded-r-xl flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-colors"
//             >
//               <FaArrowRight size={20} color="white" />
//             </button>
//           </div>
//           <button
//             onClick={handleRegisterClick}
//             className="mt-2 rounded-xl border-2 border-emerald-500 text-emerald-500 bg-transparent w-full py-2.5 font-bold transition-colors duration-300 hover:bg-emerald-500 hover:text-amber-100"
//           >
//             ¿No tienes cuenta? Regístrate aquí
//           </button>
//         </>
//       )}

//       {step === 2 && (
//         <div>
//           {!registering ? (
//             <form onSubmit={handleLoginSubmit}>
//               <p className="my-2">
//                 Usuario: <b>{user}</b>
//               </p>
//               <input
//                 type="password"
//                 placeholder="Contraseña"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full py-2.5 px-3 text-base rounded-xl border border-emerald-500 focus:outline-none mb-3"
//               />
//               <button
//                 type="submit"
//                 className="w-full py-3 bg-emerald-500 text-white rounded-xl text-lg cursor-pointer mt-3 hover:bg-emerald-600 transition-colors"
//               >
//                 Entrar
//               </button>
//               <p className="text-center mt-2.5">
//                 ¿No tienes cuenta?{" "}
//                 <button
//                   type="button"
//                   onClick={handleRegisterClick}
//                   className="text-emerald-500 font-bold bg-transparent border-none p-0 cursor-pointer hover:text-emerald-600 transition-colors"
//                 >
//                   Regístrate aquí
//                 </button>
//               </p>
//             </form>
//           ) : (
//             <form onSubmit={handleRegisterSubmit}>
//               <input
//                 type="email"
//                 placeholder="Correo"
//                 value={regEmail}
//                 onChange={(e) => setRegEmail(e.target.value)}
//                 required
//                 className="w-full py-2.5 px-3 text-base rounded-xl border border-emerald-500 focus:outline-none mb-3"
//               />
//               <input
//                 type="password"
//                 placeholder="Contraseña"
//                 value={regPass}
//                 onChange={(e) => setRegPass(e.target.value)}
//                 required
//                 className="w-full py-2.5 px-3 text-base rounded-xl border border-emerald-500 focus:outline-none mb-3"
//               />
//               <button
//                 type="submit"
//                 className="w-full py-3 bg-emerald-500 text-white rounded-xl text-lg cursor-pointer mt-3 hover:bg-emerald-600 transition-colors"
//               >
//                 Registrarme
//               </button>
//             </form>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginFlow;





























































































































// // src/components/logincomponents/LoginFlow.jsx

// import React, { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

// const LoginFlow = () => {
//   const [step, setStep] = useState(0);
//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");
//   const [registering, setRegistering] = useState(false);
//   const [regEmail, setRegEmail] = useState("");
//   const [regPass, setRegPass] = useState("");

//   const handleStartClick = () => setStep(1);

//   const handleUserContinue = () => user.trim() && setStep(2);

//   const handleRegisterClick = () => {
//     setRegistering(true);
//     setStep(2);
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     // No usar alert() aquí, ya que no funciona en este entorno
//     console.log(`Login usuario: ${user} pass: ${password}`);
//     // En una aplicación real, mostrarías un modal o mensaje de éxito/error.
//   };

//   const handleRegisterSubmit = (e) => {
//     e.preventDefault();
//     // No usar alert() aquí, ya que no funciona en este entorno
//     console.log(`Registro email: ${regEmail} pass: ${regPass}`);
//     // En una aplicación real, mostrarías un modal o mensaje de éxito/error.
//   };

//   return (
//     // Se agrega un div principal sin fondo, para que el fondo sea condicional
//     <div className="max-w-[320px] mx-auto">
//       {step === 0 && (
//         <button
//           onClick={handleStartClick}
//           className="w-full py-3 bg-emerald-500 text-white rounded-xl text-lg cursor-pointer mt-3 hover:bg-emerald-600 transition-colors"
//         >
//           Iniciar Sesión
//         </button>
//       )}

//       {/* Se aplican las clases de fondo, relleno y bordes solo a los pasos 1 y 2 */}
//       {(step === 1 || step === 2) && (
//        <div className="p-6 rounded-xl bg-blue-900 bg-opacity-50">

//           {step === 1 && (
//             <>
//               <div className="flex gap-0">
//                 <input
//                   type="text"
//                   placeholder="Usuario o correo"
//                   value={user}
//                   onChange={(e) => setUser(e.target.value)}
//                   // Cambio: el input ahora tiene fondo oscuro, texto blanco y un borde más sutil
//                   className="flex-grow py-2.5 px-3 text-base rounded-l-xl border border-white border-opacity-30 text-white bg-black bg-opacity-30 focus:outline-none"
//                   style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
//                 />
//                 <button
//                   onClick={handleUserContinue}
//                   aria-label="Continuar"
//                   className="px-4 py-2.5 bg-emerald-500 rounded-r-xl flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-colors"
//                 >
//                   <FaArrowRight size={20} color="white" />
//                 </button>
//               </div>
//               <button
//                 onClick={handleRegisterClick}
//                 className="mt-2 rounded-xl border-2 border-emerald-500 text-emerald-500 bg-transparent w-full py-2.5 font-bold transition-colors duration-300 hover:bg-emerald-500 hover:text-amber-100"
//               >
//                 ¿No tienes cuenta? Regístrate aquí
//               </button>
//             </>
//           )}

//           {step === 2 && (
//             <div>
//               {!registering ? (
//                 <form onSubmit={handleLoginSubmit}>
//                   <p className="my-2 text-white">
//                     Usuario: <b>{user}</b>
//                   </p>
//                   <input
//                     type="password"
//                     placeholder="Contraseña"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     // Cambio: el input ahora tiene fondo oscuro, texto blanco y un borde más sutil
//                     className="w-full py-2.5 px-3 text-base rounded-xl border border-white border-opacity-30 text-white bg-black bg-opacity-30 focus:outline-none mb-3"
//                   />
//                   <button
//                     type="submit"
//                     className="w-full py-3 bg-emerald-500 text-white rounded-xl text-lg cursor-pointer mt-3 hover:bg-emerald-600 transition-colors"
//                   >
//                     Entrar
//                   </button>
//                   <p className="text-center mt-2.5 text-white">
//                     ¿No tienes cuenta?{" "}
//                     <button
//                       type="button"
//                       onClick={handleRegisterClick}
//                       className="text-emerald-500 font-bold bg-transparent border-none p-0 cursor-pointer hover:text-emerald-600 transition-colors"
//                     >
//                       Regístrate aquí
//                     </button>
//                   </p>
//                 </form>
//               ) : (
//                 <form onSubmit={handleRegisterSubmit}>
//                   <input
//                     type="email"
//                     placeholder="Correo"
//                     value={regEmail}
//                     onChange={(e) => setRegEmail(e.target.value)}
//                     required
//                     // Cambio: el input ahora tiene fondo oscuro, texto blanco y un borde más sutil
//                     className="w-full py-2.5 px-3 text-base rounded-xl border border-white border-opacity-30 text-white bg-black bg-opacity-30 focus:outline-none mb-3"
//                   />
//                   <input
//                     type="password"
//                     placeholder="Contraseña"
//                     value={regPass}
//                     onChange={(e) => setRegPass(e.target.value)}
//                     required
//                     // Cambio: el input ahora tiene fondo oscuro, texto blanco y un borde más sutil
//                     className="w-full py-2.5 px-3 text-base rounded-xl border border-white border-opacity-30 text-white bg-black bg-opacity-30 focus:outline-none mb-3"
//                   />
//                   <button
//                     type="submit"
//                     className="w-full py-3 bg-emerald-500 text-white rounded-xl text-lg cursor-pointer mt-3 hover:bg-emerald-600 transition-colors"
//                   >
//                     Registrarme
//                   </button>
//                 </form>
//               )}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginFlow;
















































































































































// // src/pages/LoginFlow/LoginFlow.jsx

// import React, { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { useAuth } from "./../../hooks/users/useAuth.jsx"; // Importa el hook desde la nueva ubicación
// import MessageBox from "./../alertas/MessageBox.jsx"; // Importa el componente desde la nueva ubicación
// import { useNavigate } from 'react-router-dom';


// const LoginFlow = () => {
//   const [step, setStep] = useState(0);
//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");
//   const [registering, setRegistering] = useState(false);
//   const [regEmail, setRegEmail] = useState("");
//   const [regPass, setRegPass] = useState("");
//   const [regNombre, setRegNombre] = useState('');
//   const [regRol, setRegRol] = useState('');

//   const navigate = useNavigate();

//   const { loading, error, success, login, register, setError } = useAuth();

//   const handleStartClick = () => setStep(1);

//   const handleUserContinue = () => {
//     if (user.trim()) {
//       setStep(2);
//     }
//   };

//   const handleRegisterClick = () => {
//     setRegistering(true);
//     setStep(2);
//   };

  

// const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userData = await login(user, password);
//       console.log(userData)
//       // Redirección por rol
//       if (userData.rol === "driver") navigate("/driver");
//       else if (userData.rol === "comprobador") navigate("/comprobador");
//       else if (userData.rol === "master") navigate("/master");
//       else if (userData.rol === "super-admin") navigate("/superadmin");
//       // Puedes agregar un fallback:
//       else navigate("/");
//     } catch (err) {
//       // Error ya manejado por el hook
//     }
//   };

//   const handleRegisterSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     await register(regNombre, regEmail, regPass, regRol);
//   } catch (err) {
//     // Ya manejas errores en el hook
//   }
// };

  
//   const statusMessage = success || error;
//   const messageType = success ? 'success' : 'error';

//   return (
//     <div className="max-w-[320px] mx-auto">
//       {statusMessage && <MessageBox message={statusMessage} type={messageType} onClose={() => setError(null)} />}
//       {step === 0 && (
//         <button
//           onClick={handleStartClick}
//           className="w-full py-3 bg-emerald-500 text-white rounded-xl text-lg cursor-pointer mt-3 hover:bg-emerald-600 transition-colors"
//         >
//           Iniciar Sesión
//         </button>
//       )}

//       {(step === 1 || step === 2) && (
//         <div className="p-6 rounded-xl bg-blue-900 bg-opacity-50">
//           {loading ? (
//             <div className="text-center text-white py-4">Cargando...</div>
//           ) : step === 1 ? (
//             <>
//               <div className="flex gap-0">
//                 <input
//                   type="text"
//                   placeholder="Usuario o correo"
//                   value={user}
//                   onChange={(e) => setUser(e.target.value)}
//                   className="flex-grow py-2.5 px-3 text-base rounded-l-xl border border-white border-opacity-30 text-white bg-black bg-opacity-30 focus:outline-none"
//                   style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
//                 />
//                 <button
//                   onClick={handleUserContinue}
//                   aria-label="Continuar"
//                   className="px-4 py-2.5 bg-emerald-500 rounded-r-xl flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-colors"
//                 >
//                   <FaArrowRight size={20} color="white" />
//                 </button>
//               </div>
//               <button
//                 onClick={handleRegisterClick}
//                 className="mt-2 rounded-xl border-2 border-emerald-500 text-emerald-500 bg-transparent w-full py-2.5 font-bold transition-colors duration-300 hover:bg-emerald-500 hover:text-amber-100"
//               >
//                 ¿No tienes cuenta? Regístrate aquí
//               </button>
//             </>
//           ) : (
//             <div>
//               {!registering ? (
//                 <form onSubmit={handleLoginSubmit}>
//                   <p className="my-2 text-white">
//                     Usuario: <b>{user}</b>
//                   </p>
//                   <input
//                     type="password"
//                     placeholder="Contraseña"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full py-2.5 px-3 text-base rounded-xl border border-white border-opacity-30 text-white bg-black bg-opacity-30 focus:outline-none mb-3"
//                   />
//                   <button
//                     type="submit"
//                     className="w-full py-3 bg-emerald-500 text-white rounded-xl text-lg cursor-pointer mt-3 hover:bg-emerald-600 transition-colors"
//                   >
//                     Entrar
//                   </button>
//                   <p className="text-center mt-2.5 text-white">
//                     ¿No tienes cuenta?{" "}
//                     <button
//                       type="button"
//                       onClick={handleRegisterClick}
//                       className="text-emerald-500 font-bold bg-transparent border-none p-0 cursor-pointer hover:text-emerald-600 transition-colors"
//                     >
//                       Regístrate aquí
//                     </button>
//                   </p>
//                 </form>
//               ) : (
//                 <form onSubmit={handleRegisterSubmit}>
//   <input
//     type="text"
//     placeholder="Nombre"
//     value={regNombre}
//     onChange={(e) => setRegNombre(e.target.value)}
//     required
//     className="w-full py-2.5 px-3 text-base rounded-xl border border-white border-opacity-30 text-white bg-black bg-opacity-30 focus:outline-none mb-3"
//   />
//   <input
//     type="email"
//     placeholder="Correo"
//     value={regEmail}
//     onChange={(e) => setRegEmail(e.target.value)}
//     required
//     className="w-full py-2.5 px-3 text-base rounded-xl border border-white border-opacity-30 text-white bg-black bg-opacity-30 focus:outline-none mb-3"
//   />
//   <input
//     type="password"
//     placeholder="Contraseña"
//     value={regPass}
//     onChange={(e) => setRegPass(e.target.value)}
//     required
//     className="w-full py-2.5 px-3 text-base rounded-xl border border-white border-opacity-30 text-white bg-black bg-opacity-30 focus:outline-none mb-3"
//   />
//   <select
//     value={regRol}
//     onChange={(e) => setRegRol(e.target.value)}
//     required
//     className="w-full py-2.5 px-3 text-base rounded-xl border border-white border-opacity-30 text-white bg-black bg-opacity-30 focus:outline-none mb-3"
//   >
//     <option value="">Seleccione un rol</option>
//     <option value="driver">Driver</option>
//     <option value="comprobador">Comprobador</option>
//     <option value="master">Master</option>
//     <option value="super-admin">Super Admin</option>
//   </select>
//   <button
//     type="submit"
//     className="w-full py-3 bg-emerald-500 text-white rounded-xl text-lg cursor-pointer mt-3 hover:bg-emerald-600 transition-colors"
//   >
//     Registrarme
//   </button>
// </form>

//               )}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginFlow;






















































































































































import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useAuth } from "./../../hooks/users/useAuth.jsx";
import MessageBox from "./../alertas/MessageBox.jsx";
import { useNavigate, useLocation } from 'react-router-dom';

const LoginFlow = () => {
  const [step, setStep] = useState(0);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [registering, setRegistering] = useState(false);
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const [regNombre, setRegNombre] = useState('');
  const [regRol, setRegRol] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const { loading, error, success, loginUser, register, setError } = useAuth();

  const from = location.state?.from?.pathname || "/";

  const determinePathByRole = (role) => {
    switch (role) {
      case "driver": return "/driver";
      case "comprobador": return "/comprobador";
      case "master": return "/master";
      case "super-admin": return "/superadmin";
      default: return "/";
    }
  }

  const handleStartClick = () => setStep(1);

  const handleUserContinue = () => {
    if (user.trim()) {
      setStep(2);
    }
  };

  const handleRegisterClick = () => {
    setRegistering(true);
    setStep(2);
  };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     try {
// const userData = await login(user, password);
// console.log("LoginFlow: userData recibido:", userData);
// const redirectPath = location.state?.from?.pathname || determinePathByRole(userData.rol);
// console.log("LoginFlow: redirigiendo a:", redirectPath);
// navigate(redirectPath, { replace: true });

//     } catch (err) {
//       // Error ya manejado por el hook
//     }
//   };

const handleLoginSubmit = async (e) => {
  e.preventDefault();
  console.log("handleLoginSubmit ejecutado");
  try {
    const userData = await loginUser(user, password);
    console.log("User data recibida:", userData);
    const redirectPath = location.state?.from?.pathname || determinePathByRole(userData?.rol);
    console.log("Redirigiendo a:", redirectPath);
    navigate(redirectPath, { replace: true });
  } catch (err) {
    console.error("Error en login:", err);
  }
};

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(regNombre, regEmail, regPass, regRol);
    } catch (err) {
      // Ya manejas errores en el hook
    }
  };

  const statusMessage = success || error;
  const messageType = success ? 'success' : 'error';

  return (
    <div className="max-w-[320px] mx-auto">
      {statusMessage && <MessageBox message={statusMessage} type={messageType} onClose={() => setError(null)} />}
      {step === 0 && (
        <button
          onClick={handleStartClick}
          className="w-full py-3 bg-emerald-500 text-white rounded-xl text-lg cursor-pointer mt-3 hover:bg-emerald-600 transition-colors"
        >
          Iniciar Sesión
        </button>
      )}

      {(step === 1 || step === 2) && (
        <div className="p-6 rounded-xl bg-blue-900 bg-opacity-50">
          {loading ? (
            <div className="text-center text-white py-4">Cargando...</div>
          ) : step === 1 ? (
            <>
              <div className="flex gap-0">
                <input
                  type="text"
                  placeholder="Usuario o correo"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className="flex-grow py-2.5 px-3 text-base rounded-l-xl border border-white border-opacity-30 text-white bg-black bg-opacity-30 focus:outline-none"
                  style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                />
                <button
                  onClick={handleUserContinue}
                  aria-label="Continuar"
                  className="px-4 py-2.5 bg-emerald-500 rounded-r-xl flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-colors"
                >
                  <FaArrowRight size={20} color="white" />
                </button>
              </div>
              <button
                onClick={handleRegisterClick}
                className="mt-2 rounded-xl border-2 border-emerald-500 text-emerald-500 bg-transparent w-full py-2.5 font-bold transition-colors duration-300 hover:bg-emerald-500 hover:text-amber-100"
              >
                ¿No tienes cuenta? Regístrate aquí
              </button>
            </>
          ) : (
            <div>
              {!registering ? (
                <form onSubmit={handleLoginSubmit}>
                  <p className="my-2 text-white">
                    Usuario: <b>{user}</b>
                  </p>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-2.5 px-3 text-base rounded-xl border border-white border-opacity-30 text-white bg-black bg-opacity-30 focus:outline-none mb-3"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-500 text-white rounded-xl text-lg cursor-pointer mt-3 hover:bg-emerald-600 transition-colors"
                  >
                    Entrar
                  </button>
                  <p className="text-center mt-2.5 text-white">
                    ¿No tienes cuenta?{" "}
                    <button
                      type="button"
                      onClick={handleRegisterClick}
                      className="text-emerald-500 font-bold bg-transparent border-none p-0 cursor-pointer hover:text-emerald-600 transition-colors"
                    >
                      Regístrate aquí
                    </button>
                  </p>
                </form>
              ) : (
                <form onSubmit={handleRegisterSubmit}>
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={regNombre}
                    onChange={(e) => setRegNombre(e.target.value)}
                    required
                    className="w-full py-2.5 px-3 text-base rounded-xl border border-white border-opacity-30 text-white bg-black bg-opacity-30 focus:outline-none mb-3"
                  />
                  <input
                    type="email"
                    placeholder="Correo"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    required
                    className="w-full py-2.5 px-3 text-base rounded-xl border border-white border-opacity-30 text-white bg-black bg-opacity-30 focus:outline-none mb-3"
                  />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    value={regPass}
                    onChange={(e) => setRegPass(e.target.value)}
                    required
                    className="w-full py-2.5 px-3 text-base rounded-xl border border-white border-opacity-30 text-white bg-black bg-opacity-30 focus:outline-none mb-3"
                  />
                  <select
                    value={regRol}
                    onChange={(e) => setRegRol(e.target.value)}
                    required
                    className="w-full py-2.5 px-3 text-base rounded-xl border border-white border-opacity-30 text-white bg-black bg-opacity-30 focus:outline-none mb-3"
                  >
                    <option value="">Seleccione un rol</option>
                    <option value="driver">Driver</option>
                    <option value="comprobador">Comprobador</option>
                    <option value="master">Master</option>
                    <option value="super-admin">Super Admin</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-500 text-white rounded-xl text-lg cursor-pointer mt-3 hover:bg-emerald-600 transition-colors"
                  >
                    Registrarme
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoginFlow;



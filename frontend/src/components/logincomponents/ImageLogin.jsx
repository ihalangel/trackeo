// import React from 'react'

// const backgroundStyle = {
//   backgroundImage: "url('/images/tuImagen.jpg')",
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   height: '100vh',
//   width: '100vw',
//   position: 'fixed',  // Para que esté fijo detrás
//   top: 0,
//   left: 0,
//   zIndex: -1,
// }

// export default function ImageLogin() {
//   return (
//     <div className="rounded-t-[50px] overflow-hidden">
//       <img
//         src="/images/puerto-contenedores-camiones.jpg"
//         alt="Puerto y contenedores"
//         className="w-full object-cover"
//       />
//     </div>
//   )
// }



import React from 'react'
// import puertoImg from './../assets/images/backgroundLogin.png'
import puertoImg from './../../assets/images/backgroundLogin.png'


export default function ImageLogin() {
  return (
    <div className="rounded-t-[50px] overflow-hidden">
      <img
        src={puertoImg}
        alt="Puerto y contenedores"
        className="w-full object-cover"
      />
    </div>
  )
}

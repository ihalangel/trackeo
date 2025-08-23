app-yardas/
├── backend/
│   ├── src/
│   │   ├── config/             # Configuraciones generales (DB, JWT, etc.)
│   │   ├── controllers/        # Lógica de cada endpoint
│   │   ├── middleware/         # Middleware (auth, geolocalización, roles)
│   │   ├── models/             # Modelos de datos (users, yards, containers, transactions)
│   │   ├── routes/             # Rutas/Endpoints
│   │   ├── services/           # Lógica de negocio (créditos, QR, email, almacenamiento imágenes)
│   │   ├── utils/              # Funciones helper (fechas, validaciones, generación de QR)
│   │   └── app.js              # Configuración de Express
│   ├── uploads/                # Carpeta temporal o permanente para imágenes
│   └── package.json
│
├── frontend/
│   ├── public/                 # Archivos estáticos y manifest.json (PWA)
│   ├── src/
│   │   ├── assets/             # Imágenes, logos, íconos
│   │   ├── components/         # Componentes reutilizables (botones, inputs, modales)
│   │   ├── pages/              # Páginas por rol (Driver, Comprobador, Master, Super-Admin)
│   │   ├── routes/             # Configuración de rutas (React Router)
│   │   ├── services/           # Llamadas al backend / API (auth, containers, transactions)
│   │   ├── context/            # Context o Redux (auth, credits, yardas)
│   │   ├── hooks/              # Custom hooks (useGeoLocation, useQRScanner)
│   │   ├── styles/             # Tailwind config + css global
│   │   ├── utils/              # Funciones helper (validaciones, formatos, QR decode)
│   │   └── main.jsx             # Entry point React + Vite
│   └── package.json
│
├── scripts/                    # Scripts de deploy, seed de DB o migraciones
├── docs/                       # Documentación, diagramas de flujo, ejemplos de datos
├── .gitignore
├── README.md
└── vite.config.js









2to level:

app-yardas/
├── backend/
│   ├── src/
│   │   ├── config/             # Configuraciones generales (DB, JWT, etc.)
│   │   ├── controllers/        # Lógica de cada endpoint
│   │   ├── middleware/         # Middleware (auth, geolocalización, roles)
│   │   ├── models/             # Modelos de datos (users, yards, containers, transactions)
│   │   ├── routes/             # Rutas/Endpoints
│   │   ├── services/           # Lógica de negocio (créditos, QR, email, almacenamiento imágenes)
│   │   ├── utils/              # Funciones helper (fechas, validaciones, generación de QR)
│   │   └── app.js              # Configuración de Express
│   ├── uploads/                # Carpeta temporal o permanente para imágenes
│   └── package.json
│



├── frontend/
│   ├── public/                 # Archivos estáticos y manifest.json (PWA)
│   ├── src/
│   │   ├── assets/             # Imágenes, logos, íconos
│   │   ├── components/         # Component reutilizables(botones,inputs, modales,NavBar)
│   │   ├── pages/              # Páginas por rol(Driver, Comprobador, Master,Login +)
│   │   ├── routes/             # Configuración de rutas (AppRoutes.jsx)
│   │   ├── services/           # Llamadas al backend/API (auth,containers, transactions)
│   │   ├── context/            # Context o Redux (auth, credits, yardas)
│   │   ├── hooks/              # Custom hooks (useGeoLocation, useQRScanner)
│   │   ├── styles/             # Tailwind config + css global
│   │   ├── utils/              # Funciones helper (validaciones, formatos, QR decode)
│   │   └── main.jsx            # Entry point React + Vite
│   └── package.json
│
├── scripts/                    # Scripts de deploy, seed de DB o migraciones
├── docs/                       # Documentación, diagramas de flujo, ejemplos de datos
├── .gitignore
├── README.md
└── vite.config.js    






 frontend/
   ├── public/                 # Archivos estáticos y manifest.json (PWA)
   ├── src/
   │   ├── assets/             # Imágenes, logos, íconos
   │   ├── components/         # Component reutilizables(botones,inputs, modales,NavBar)
   │   ├── pages/              # Páginas por rol(Driver, Comprobador, Master,Login +)
   │   ├── routes/             # Configuración de rutas (AppRoutes.jsx)
   │   ├── services/           # Llamadas al backend/API (auth,containers, transactions)
   │   ├── context/            # Context o Redux (auth, credits, yardas)
   │   ├── hooks/              # Custom hooks (useGeoLocation, useQRScanner)
   │   ├── styles/             # Tailwind config + css global
   │   ├── utils/              # Funciones helper (validaciones, formatos, QR decode)
   │   └── main.jsx            # Entry point React + Vite
   └── package.json


Src: desestructurado y  visto mas de cerca....

components/
├── NavBar.jsx             # Barra de navegación reutilizable
├── Button.jsx             # Componente botón estilizado
├── Input.jsx              # Componente input genérico
├── Modal.jsx              # Componentes modales reutilizables
├── FormLogin.jsx          # Formulario específico reutilizable para login
├── FormRegister.jsx       # Formulario específico reutilizable para registro
├── Loader.jsx             # Indicador de carga (spinner)
└── ...                   # Otros componentes UI genéricos


pages/
├── Login.jsx               # Página principal con formulario login/registro
├── Driver.jsx              # Dashboard para rol Driver
├── Comprobador.jsx         # Dashboard para rol Comprobador
├── Master.jsx              # Dashboard para rol Master
├── SuperAdmin.jsx          # Dashboard para rol SuperAdmin
└── NotFound.jsx            # Página 404 para rutas no encontradas



context/
├── AuthContext.jsx          # Contexto para autenticación y manejo de usuario
├── CreditContext.jsx        # Contexto para manejo de créditos (si aplica)
└── YardContext.jsx          # Contexto para manejo del estado de las 


hooks/
├── useGeoLocation.jsx       # Hook para obtener la geolocalización del usuario
├── useQRScanner.jsx         # Hook para escaneo de códigos QR (custom)
└── useAuthStatus.jsx        # Hook para gestionar estado de autenticación o sesión










































































📐 Descripción estructural (según ejemplos que me diste)
🔹 Mobile (9:16, teléfono vertical)

Encabezado (10–15% superior):

Fondo blanco.

Logotipo o ícono minimalista centrado (ej. ancla, camión o contenedor).

Título y subtítulo (15–20% siguiente):

Texto grande y en negrita: “Control de Yardas & Contenedores”.

Debajo, subtítulo corto en tipografía ligera y gris suave.

Botón principal (10–15%):

Botón verde, grande y redondeado.

Texto: “Iniciar sesión”.

Debajo un link más pequeño en gris: “¿No tienes cuenta? Regístrate”.

Imagen ilustrativa o fotorrealista (40–50% inferior):

Foto limpia de un puerto, contenedores y camiones.

Puede estar recortada con bordes redondeados arriba para integrarse al diseño.

🔹 Tablet (3:4 o 4:3, horizontal o vertical)

Parte izquierda (40%): Logo, título, subtítulo y botón (todo centrado verticalmente).

Parte derecha (60%): Imagen más amplia del puerto/contenedores.

Mantener mucho espacio en blanco para aire y profesionalismo.

🔹 Desktop (16:9 o mayor)

Header superior (10% altura):

Logo a la izquierda.

Opciones mínimas de navegación a la derecha (ej. Login, Registro).

Cuerpo (70% altura):

Columna izquierda (40%): título, subtítulo y botón de acción.

Columna derecha (60%): imagen grande y bien iluminada del puerto/camiones.

Footer (20% altura):

Información mínima: © empresa, soporte, contacto.

🔑 Palabras clave para IA

“Diseño responsive mobile-first, limpio, corporativo, elegante.”

“Colores: azul profundo (#1E3A8A), verde fresco (#10B981), gris neutro (#6B7280), blanco de fondo.”

“Tipografía moderna, sans-serif, profesional.”

“Fotos o ilustraciones de contenedores, camiones y puertos integradas en la parte inferior o derecha.”







📖 Descripción detallada de la estructura visual

1. General

Estilo: corporativo, limpio, elegante, minimalista.

Colores base:

Fondo principal: blanco (#FFFFFF).

Color primario: azul profundo (#1E3A8A).

Color secundario: verde fresco (#10B981).

Texto secundario: gris neutro (#6B7280).

Tipografía: sans-serif moderna (ej. Inter, Roboto o similar).

Botones: grandes, redondeados (rounded-2xl), con sombra suave (shadow-md).

2. Mobile (aspect ratio 9:16, teléfono vertical)
Encabezado (Header, 15% superior)

Fondo blanco.

Centro: ícono circular corporativo (ejemplo: ancla, camión o contenedor estilizado).

Tamaño mediano (~60px).

Color azul profundo.

Título y subtítulo (20%)

Texto centrado.

Título principal:

“Container & Yard Management” (ejemplo de copy).

Fuente grande, bold, azul profundo (text-2xl font-bold text-blue-900).

Subtítulo:

Texto más pequeño, gris suave.

Máximo 2 líneas.

text-sm text-gray-500.

Formulario de acción (20%)

Centrado en la pantalla.

Botón principal:

Verde (#10B981).

Texto blanco: “Iniciar Sesión”.

Ocupa ~80% del ancho.

Link debajo:

Texto gris pequeño: “¿No tienes cuenta? Regístrate”.

Clickeable, alineado al centro.

Imagen ilustrativa / fotorrealista (40–45% inferior)

Fotografía limpia de contenedores y camiones en un puerto.

Imagen a todo el ancho.

Arriba de la imagen, una curva o borde redondeado para integrarla con el área blanca del formulario.

Footer mínimo (5%)

Fondo blanco.

Texto gris claro, pequeño: “© 2025 Nombre de la empresa”.

Centrado.

3. Tablet (aspect ratio 3:4 o 4:3)

Layout en 2 columnas.

Columna izquierda (40% ancho):

Logo arriba.

Título + subtítulo al centro.

Botón de acción más grande.

Columna derecha (60% ancho):

Imagen amplia del puerto con contenedores y camiones.

Imagen alineada en la parte central o inferior.

Footer: sigue abajo, centrado.

4. Desktop (pantalla ancha, 16:9 o más)
Header (10% altura, sticky arriba)

Fondo blanco.

Izquierda: logotipo (pequeño, azul).

Derecha: menú minimalista (ejemplo: “Inicio | Login | Registro”).

Tipografía gris oscuro.

Espaciado amplio (px-4).

Cuerpo principal (70% altura)

Dividido en 2 columnas:

Izquierda (40% ancho):

Logo pequeño arriba.

Gran título, subtítulo, botón principal verde.

Link “¿No tienes cuenta? Regístrate” debajo.

Derecha (60% ancho):

Imagen grande y limpia de camiones y contenedores.

Ocupa toda la altura visible del cuerpo.

Footer (20% altura)

Fondo gris muy claro (#F9FAFB).

Contenido centrado:

Texto gris: “© 2025 Nombre de la empresa | Contacto | Soporte”.

Links pequeños en azul.

5. Comportamiento Responsive

En móvil: todo en una sola columna y centrado verticalmente. Imagen va al fondo.

En tablet: se divide en dos columnas (texto a la izquierda, imagen a la derecha).

En desktop: mantiene las dos columnas, pero con header fijo arriba y footer definido.

6. Navegación / Botones

Botón principal siempre verde con texto blanco.

Hover en desktop: verde más oscuro (#059669).

Links en gris, hover: azul profundo (#1E3A8A).

👉 Con esta descripción, una IA que genere código debería poder producir el layout completo en Tailwind con responsive design, botones, tipografía y colores definidos.
# README - Frontend UNACH

## 📌 Proyecto: Módulo de Investigación y Posgrado (UNACH)
Este repositorio contiene el frontend de la aplicación web del módulo de investigación y posgrado de la Universidad Autónoma de Chiapas (UNACH). Se ha desarrollado utilizando **React + Vite** con **Tailwind CSS** para la estilización.

---

## 🛠️ Tecnologías utilizadas
- **React 18.2.0** (Biblioteca para la construcción de interfaces de usuario)
- **Vite** (Entorno de desarrollo rápido para React)
- **Tailwind CSS** (Framework de CSS para diseño responsivo y optimizado)
- **React Router DOM 6.15.0** (Para la navegación en la aplicación)
- **React Modal 3.16.1** (Manejo de modales en la UI)
- **Styled Components 6.0.7** (Estilización basada en componentes)
- **@react-pdf/renderer 3.1.14** (Generación de PDFs desde React)

---

## 📂 Estructura del Proyecto

```bash
UNACH-1/src
│   main.jsx
│
├── assets
│   ├── css
│   │   ├── botoncito.css
│   │   ├── index.css
│   │   ├── inputTable.css
│   │   ├── modal.css
│   │   └── seccionVertical.css
│   ├── img/Icon
│   │   ├── arrow.png
│   │   ├── logo.svg
│   │   ├── UNACH-logo.png
│   │   └── printer.png
│
├── components
│   ├── atoms (Componentes más pequeños, como botones e íconos)
│   ├── molecules (Componentes compuestos por átomos, como tarjetas y formularios)
│   ├── organism (Componentes más grandes como secciones enteras de la app)
│
├── containers
│   ├── App.jsx (Punto de entrada principal de la aplicación)
│   ├── ProtectRoute.jsx (Protección de rutas en la aplicación)
│
├── contexts
│   ├── SharedDataContext.js (Contexto global para compartir datos entre componentes)
│   ├── UserContext.js (Manejo de usuario y sesión en la aplicación)
│
├── pages
│   ├── Committe.jsx (Vista para el comité evaluador)
│   ├── Direccion.jsx (Vista para la dirección académica)
│   ├── Evaluator.jsx (Vista para los evaluadores de proyectos)
│   ├── Home.jsx (Pantalla principal de la aplicación)
│   ├── Pending.jsx (Vista de proyectos pendientes)
│   ├── PreviewPDF.jsx (Vista previa de documentos en PDF)
│   ├── Review.jsx (Vista para la revisión de propuestas)
│   ├── Sections.jsx (Secciones detalladas de cada proyecto)
│
├── utils
│   ├── storage.js (Manejo de almacenamiento en el navegador)
│
└── webComponents
    ├── button.js
    ├── input.js
    ├── SectionTitleHeader.js
    └── textArea.js
```

---

## ⚡ Instalación y Configuración

### 1️⃣ Clonar el repositorio
```bash
git clone  https://github.com/DarinelEscobar/UNACH.git
cd UNACH
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Iniciar el servidor de desarrollo
```bash
npm run dev
```

---

## 📌 Descripción del Proyecto
Este proyecto tiene como finalidad automatizar el proceso de llenado de formularios de los proyectos propuestos por estudiantes de la UNACH. Facilita la revisión y evaluación de las propuestas por parte del comité académico y los evaluadores.

El **frontend** se encarga de ofrecer una interfaz accesible y eficiente para los usuarios involucrados, proporcionando una experiencia fluida y organizada mediante el uso de React, Tailwind CSS y otras herramientas modernas.

---

## 🚀 Funcionalidades Clave
✔️ Registro y autenticación de usuarios
✔️ Creación y edición de proyectos de investigación
✔️ Evaluación de proyectos por parte del comité y evaluadores
✔️ Generación de reportes en formato PDF
✔️ Panel de administración para la gestión de propuestas
✔️ Sistema de roles (Estudiantes, Evaluadores, Comité, Dirección)
✔️ Notificaciones en tiempo real
✔️ Exportación e impresión de documentos

---
📄 Documentación Relacionada

Este proyecto está documentado en los siguientes reportes:

STD - Proyecto Estancia: Información detallada sobre la participación en el desarrollo del frontend, desafíos técnicos y soluciones aplicadas.
https://drive.google.com/file/d/1Alk7_GqG0IzahUECPSxkGu_6Y5rSX9Ev/view?usp=sharing
Reporte Final de Estadía: Explicación del impacto del módulo de investigación en la UNACH, logros alcanzados y perspectivas futuras.
https://drive.google.com/file/d/1H8BL0oBYRAFaOu1w4U8x8cypHA7sg5uD/view?usp=sharing

⚠ Importante: Los enlaces proporcionados pueden expirar en cualquier momento. No me hago responsable de la validez o disponibilidad de estos documentos en el futuro. No contactar para solicitar estos archivos en caso de que los enlaces ya no estén activos.

---
## 📩 Contacto
Si tienes preguntas o sugerencias sobre el proyecto, no dudes en contactarnos:
✉️ Email: alzunun@upchiapas.edu.mx
🔗 Sitio web: [www.upchiapas.edu.mx](http://www.upchiapas.edu.mx)


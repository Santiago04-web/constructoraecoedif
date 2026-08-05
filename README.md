# Landing Page Corporativa Reutilizable (Template para Verificación Meta BM)

Landing page moderna, ultrarrápida y responsive para presencia corporativa oficial. Diseñada en **HTML5 + Tailwind CSS + JavaScript Puro**, configurable al 100% desde un único archivo `config.js`.

---

## 📁 Estructura del Proyecto

```text
/
├── index.html        # Estructura principal y componentes dinámicos
├── config.js        # ÚNICO ARCHIVO DE CONFIGURACIÓN (Cambia todos los datos aquí)
├── logo.jpg         # Logotipo corporativo de la empresa
├── hero.jpg         # Imagen principal de cabecera
└── README.md        # Guía de despliegue y uso
```

---

## ⚡ ¿Cómo reutilizar esta plantilla para OTRA empresa?

No necesitas modificar el código HTML ni CSS. Solo abre el archivo [`config.js`](config.js) y reemplaza los datos:

```javascript
const config = {
  company: {
    name: "Nombre de la Empresa",
    nit: "123456789-0",
    slogan: "Tu Eslogan Corporativo",
    tagline: "Descripción breve...",
    logo: "logo.jpg"
  },
  contact: {
    phone: "+57 300 0000000",
    email: "contacto@empresa.com",
    address: "Calle 10 # 20 - 30",
    city: "Medellín",
    country: "Colombia"
  },
  social: {
    whatsapp: "https://api.whatsapp.com/send?phone=573000000000"
  }
};
```

---

## 🚀 Despliegue en GitHub Pages (Paso a Paso)

1. Crea un nuevo repositorio en GitHub.
2. Sube todos los archivos de esta carpeta (`index.html`, `config.js`, `logo.jpg`, `hero.jpg`, `README.md`).
3. En tu repositorio de GitHub, ve a **Settings** > **Pages**.
4. En **Source**, selecciona la rama `main` (o `master`) y la carpeta `/ (root)`.
5. Haz clic en **Save**. ¡Tu sitio estará en línea en un par de minutos!

---

## 🛡️ Verificación Meta / Facebook Business Manager

Esta plantilla incluye los requerimientos exigidos por los auditores de Meta:
- **NIT y Razón Social visibles**.
- **Dirección física y datos de contacto coincidentes**.
- **Política de Tratamiento de Datos Personales (Ley 1581 Habeas Data)**.
- **Términos y Condiciones del Servicio**.
- **Banner de Consentimiento de Cookies (GDPR)**.
- **Formulario de consulta interactivo**.

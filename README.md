# 🧩 Generador Dinámico de Formularios con Vuetify 3

Este proyecto permite generar formularios dinámicamente a partir de un archivo JSON. Utiliza **Vue 3** con **TypeScript** y **Vuetify 3**, integrando validaciones avanzadas, control de errores y persistencia local de datos.

---

## 🚀 Instalación y Ejecución

### ✅ Requisitos Previos

Antes de comenzar, asegurate de tener instalado:

- Node.js (versión 16 o superior) → [Descargar Node.js](https://nodejs.org/)
- npm (viene con Node.js)

### 📦 Instalación del Proyecto

1. Cloná este repositorio:

//Abre una terminal en VSCode y ejecuta//

git clone https://github.com/belenserer/Prueba_Tandem.git
cd Prueba_Tandem
npm install
npm run dev

La aplicación se abrirá en tu navegador en http://localhost:5173/.

🧠 Decisiones de Diseño
📦 Estructura del JSON
El formulario se genera a partir de un objeto JSON estructurado así:

{
formTitle: 'Formulario de Usuario',
fields: [
{
name: 'nombre',
label: 'Nombre',
type: 'text',
default: '',
rules: ['required', 'min:3']
},
{
name: 'vivienda',
label: 'Tipo de vivienda',
type: 'select',
options: ['Casa', 'Departamento', 'Otro'],
default: '',
rules: ['required']
}
]
}
Esta estructura permite:

- Reutilización y expansión sencilla

- Separación de lógica de presentación

- Validaciones flexibles y extensibles

✅ Validaciones Avanzadas
Se utilizan las reglas de validación de Vuetify 3 con soporte para:

- Campos obligatorios (required)

- Reglas de longitud (min, max)

- Correos válidos (email)

- Errores en tiempo real

💾 Persistencia de Datos
Al enviar el formulario:

- Se valida todo el contenido

- Los datos se guardan localmente en localStorage

- Se muestra un mensaje de éxito o error usando VAlert de Vuetify con una diracion de 4 segundos.

- El formulario se reinicia automáticamente

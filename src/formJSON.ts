export default {
  formTitle: "Registro de Usuario",
  fields: [
    {
      name: "nombre",
      label: "Nombre y Apellido",
      type: "text",
      default: "",
      validations: [
        { type: "required", message: "El nombre es obligatorio." },
        { type: "minLength", value: 3, message: "Debe tener al menos 3 caracteres." },
        { type: "maxLength", value: 50, message: "Debe tener como máximo 50 caracteres." },
        { type: "regex", pattern: "^[a-zA-ZáéíóúÁÉÍÓÚ\\s]+$", message: "Sólo letras y espacios." }
      ]
    },
    {
      name: "mail",
      label: "Mail",
      type: "email",
      default: "",
      validations: [
        { type: "required", message: "El mail es obligatorio." },
        { type: "regex", pattern: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", message: "Formato inválido de mail." },
        { type: "maxLength", value: 30, message: "Máximo 30 caracteres." }
      ]
    },
    {
      name: "codArea",
      label: "Código de Área",
      type: "number",
      default: "",
      validations: [
        { type: "required", message: "El código de área es obligatorio." },
        { type: "maxLength", value: 4, message: "Máximo 4 dígitos." }
      ]
    },
    {
      name: "telefono",
      label: "Teléfono",
      type: "number",
      default: "",
      validations: [
        { type: "required", message: "El teléfono es obligatorio." },
        { type: "minLength", value: 7, message: "Mínimo 7 dígitos." }
      ]
    },
    {
      name: "vivienda",
      label: "Vivienda",
      type: "selectable",
      default: "",
      options: ["Casa", "Departamento"],
      validations: [
        { type: "required", message: "La selección es obligatoria." }
      ]
    }
  ]
}

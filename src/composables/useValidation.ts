export const useValidation = () => {
  const generateRules = (validations: any[]) => {
    const rules: ((v: any) => true | string)[] = []

    validations.forEach((rule) => {
      switch (rule.type) {
        case 'required':
          rules.push((v: any) => {
            return !!v || rule.message || 'Este campo es obligatorio'
          })
          break

        case 'minLength':
          rules.push((v: any) => {
            return (typeof v === 'string' && v.length >= rule.value) || rule.message || `Mínimo ${rule.value} caracteres`
          })
          break

        case 'maxLength':
          rules.push((v: any) => {
            return (typeof v === 'string' && v.length <= rule.value) || rule.message || `Máximo ${rule.value} caracteres`
          })
          break

        case 'regex':
          rules.push((v: any) => {
            return (typeof v === 'string' && new RegExp(rule.pattern).test(v)) || rule.message || 'Formato inválido'
          })
          break
      }
    })

    return rules
  }

  return { generateRules }
}

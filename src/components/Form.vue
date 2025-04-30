<script setup lang="ts">
import { ref } from 'vue'
import FormField from '@/components/FormField.vue'
import formSchema from '@/formJSON'

const formRef = ref()
const formData = ref<Record<string, any>>({})
const isSubmitting = ref(false)
const isFormValid = ref(false)

const showAlert = ref(false)
const alertMessage = ref('')
const alertType = ref<'success' | 'error' | 'info' | 'warning'>('info')

const showVuetifyAlert = (message: string, type: typeof alertType.value = 'info') => {
  alertMessage.value = message
  alertType.value = type
  showAlert.value = true
  setTimeout(() => {
    showAlert.value = false
  }, 4000)
}

formSchema.fields.forEach((field) => {
  formData.value[field.name] = field.default ?? ''
})

const resetForm = () => {
  formSchema.fields.forEach((field) => {
    formData.value[field.name] = field.default ?? ''
  })
  formRef.value?.resetValidation()
}

const submitForm = async () => {
  const form = formRef.value
  if (!form) return

  const result = await form.validate()

  if (!result.valid) {
    showVuetifyAlert('Por favor completá los campos obligatorios ❗', 'error')
    return
  }

  isSubmitting.value = true

  try {
    console.log('Formulario enviado:', formData.value)
    localStorage.setItem('formulario-usuario', JSON.stringify(formData.value))
    showVuetifyAlert('Formulario enviado con éxito 🎉', 'success')
    resetForm()
  } catch (error: any) {
    showVuetifyAlert('Error al enviar el formulario ❌', 'error')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <v-container>
    <v-card class="pa-6" elevation="4">
      <v-card-title class="text-h5">{{ formSchema.formTitle }}</v-card-title>

      <v-card-text>
        <!-- ALERTA -->
        <v-alert
          v-if="showAlert"
          :type="alertType"
          class="mb-4"
          dismissible
          @input="showAlert = false"
        >
          {{ alertMessage }}
        </v-alert>

        <v-form ref="formRef" v-model="isFormValid">
          <FormField
            v-for="field in formSchema.fields"
            :key="field.name"
            :field="field"
            v-model="formData[field.name]"
          />
        </v-form>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn color="primary" @click="submitForm" :loading="isSubmitting" :disabled="isSubmitting">
          Enviar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

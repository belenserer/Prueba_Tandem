<script setup lang="ts">
import { computed } from 'vue'
import { useValidation } from '@/composables/useValidation'

const props = defineProps<{
  field: any
  modelValue: any
}>()

const emit = defineEmits(['update:modelValue'])

const { generateRules } = useValidation()

const rules = computed(() => {
  return generateRules(props.field.validations || [])
})
</script>

<template>
  <div>
    <!-- Text and Email -->
    <v-text-field
      v-if="field.type === 'text' || field.type === 'email'"
      :label="field.label"
      :type="field.type"
      :rules="rules"
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
    />

    <!-- Number -->
    <v-text-field
      v-else-if="field.type === 'number'"
      :label="field.label"
      type="number"
      :rules="rules"
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
    />

    <!-- Select -->
    <v-select
      v-else-if="field.type === 'selectable'"
      :label="field.label"
      :items="field.options"
      :rules="rules"
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
    />
  </div>
</template>

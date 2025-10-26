<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
    <legend class="fieldset-legend">{{ props.title }}</legend>
    <p class="label">{{ props.description }}</p>
    <slot></slot>
  </fieldset>
</template>
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
  <fieldset class="fieldset rounded-lg w-full p-4">
    <legend class="text-red-400 text-lg font-medium px-2">{{ props.title }}</legend>
    <p class="text-gray-400 text-sm mb-4" v-if="props.description">{{ props.description }}</p>
    <slot></slot>
  </fieldset>
</template>

<style scoped>
.fieldset {
  background: rgba(30, 35, 45, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(244, 82, 73, 0.2);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(96, 165, 250, 0.1);
  transition: all 0.3s ease;
}

.fieldset:hover {
  border-color: rgba(244, 82, 73, 0.4);
}
</style>
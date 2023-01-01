<script setup>
import { ref, vModelText } from 'vue';
const value = ref('');

vModelText.beforeUpdate = function (el, { value, modifiers: { capitalize } }) {
  let newValue = value == null ? '' : value;
  if (capitalize) {
    newValue = newValue.charAt(0).toUpperCase() + value.slice(1);
  }
  if (el.value !== newValue) {
    el.value = newValue;
  }
};
</script>

<template>
  <input type="text" v-model.capitalize="value" />
</template>

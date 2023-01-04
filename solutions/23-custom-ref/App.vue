<script setup>
import { watch, customRef } from 'vue';

/**
 * Implement the function
 */

function useDebouncedRef(value, delay = 200) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      },
    };
  });
}
const text = useDebouncedRef('hello');

/**
 * Make sure the callback only gets triggered once when entered multiple times in a certain timeout
 */
watch(text, (value) => {
  console.log(value);
});
</script>

<template>
  <input v-model="text" />
</template>

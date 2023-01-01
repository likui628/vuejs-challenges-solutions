<script setup lang="ts">
import { ref } from 'vue';

interface UseCounterOptions {
  min?: number;
  max?: number;
}

/**
 * Implement the composable function
 * Make sure the function works correctly
 */
function useCounter(initialValue = 0, options: UseCounterOptions = {}) {
  const count = ref(initialValue);

  const inc = () => {
    const newVal = count.value + 1;
    if (options.max !== undefined && newVal > options.max) {
      return;
    }
    count.value = newVal;
  };

  const dec = () => {
    const newVal = count.value - 1;
    if (options.min !== undefined && newVal < options.min) {
      return;
    }
    count.value = newVal;
  };

  const reset = () => {
    count.value = initialValue;
  };

  return { count, inc, dec, reset };
}

const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 10 });
</script>

<template>
  <p>Count: {{ count }}</p>
  <button @click="inc">inc</button>
  <button @click="dec">dec</button>
  <button @click="reset">reset</button>
</template>

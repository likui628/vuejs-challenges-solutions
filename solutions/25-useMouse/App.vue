<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
// Implement ...
function useEventListener(target, event, callback) {
  onMounted(() => {
    target.addEventListener(event, callback);
  });

  onUnmounted(() => {
    target.removeEventListener(event);
  });
}

// Implement ...
function useMouse() {
  const x = ref(0);
  const y = ref(0);
  useEventListener(window, 'mousemove', (e) => {
    x.value = e.offsetX;
    y.value = e.offsetY;
  });

  return { x, y };
}
const { x, y } = useMouse();
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>

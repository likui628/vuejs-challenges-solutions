<script setup lang="ts">
import { ref, watchEffect } from 'vue';

/**
 * Implement the custom directive
 * Make sure the list item text color changes to red when the `toggleTab` is toggled
 *
 */
const VActiveStyle = {
  mounted(el, { value: [style, fn] }, vnode, prevVnode) {
    watchEffect(() => {
      const active = fn();
      for (const [key, value] of Object.entries(style)) {
        el.style[key] = active ? value : '';
      }
    });
  },
};

const list = [1, 2, 3, 4, 5, 6, 7, 8];
const activeTab = ref(0);
function toggleTab(index: number) {
  activeTab.value = index;
}
</script>

<template>
  <ul>
    <li
      v-for="(item, index) in list"
      :key="index"
      v-active-style="[{ color: 'red' }, () => activeTab === index]"
      @click="toggleTab(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts">
/**
 * Implement the custom directive
 * Make sure the `onClick` method only gets triggered once when clicked many times quickly
 * And you also need to support the debounce delay time option. e.g `v-debounce-click:ms`
 *
 */
function debounce(fn, wait) {
  var timer = null;

  return function () {
    var context = this,
      args = arguments;

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

const VDebounceClick = {
  created(el, { value: callback, arg: delay }, vnode, prevVnode) {
    el.addEventListener('click', debounce(callback, delay));
  },
  unmounted(el, binding, vnode, prevVnode) {
    el.removeEventListener('click');
  },
};

function onClick() {
  console.log('Only triggered once when clicked many times quickly');
}
</script>

<template>
  <button v-debounce-click:200="onClick">Click on it many times quickly</button>
</template>

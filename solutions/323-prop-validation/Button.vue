<script setup>
defineProps({
  type: {
		type:String,
  	default: 'default',
  	validator:(value)=>{
  		return ['primary', 'ghost', 'dashed', 'link', 'text', 'defalut'].includes(value)
		}
  }
})
</script>

<template>
  <button>Button</button>
</template>
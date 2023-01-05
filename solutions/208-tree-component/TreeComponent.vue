<script setup lang="ts">
interface TreeData {
  key: string;
  title: string;
  children: TreeData[];
}
defineProps<{ data: TreeData[] }>();
</script>

<template>
  <!-- do something.... -->
  <template v-for="item in data">
    {{ item.title
    }}<template v-if="item.children">
      <TreeComponent :data="item.children" />
    </template>
  </template>
</template>

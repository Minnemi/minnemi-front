<template>
  <SvgIcon type="mdi" :path="path" :size="size" :style="{ color }"></SvgIcon>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';

defineProps({
  path: String,
  size: {
    type: [String, Number],
    default: 32,
  },
  color: String,
});
</script>

<style scoped></style>

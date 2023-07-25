<template>
  <section class="container">
    <RouterView name="auth"></RouterView>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import Wave from '@@lib/wave.js';

onMounted(() => {
  new Wave(true);
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 3rem 0;
  width: 100%;
  min-height: 100vh;
}
</style>

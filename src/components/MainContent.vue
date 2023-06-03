<template>
  <main>
    <RouterView name="app"></RouterView>
    <ChangeThemeComponent></ChangeThemeComponent>
  </main>
</template>

<script setup>
import ChangeThemeComponent from './utils/ChangeThemeComponent.vue';
</script>

<style scoped></style>

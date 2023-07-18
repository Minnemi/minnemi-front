<template>
  <main class="container">
    <Sidebar />
    <section>
      <RouterView name="app"></RouterView>
    </section>
  </main>
</template>

<script setup>
import Sidebar from '@components/partials/SidebarComponent.vue';
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  min-height: 200vh;
}
</style>

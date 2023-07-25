<template>
  <main class="container-app">
    <Sidebar />

    <section>
      <HeaderComponent />
      <AppContainer>
        <RouterView name="app"></RouterView>
      </AppContainer>
    </section>
  </main>
</template>

<script setup>
import Sidebar from '@components/partials/SidebarComponent.vue';
import HeaderComponent from '@components/partials/HeaderComponent.vue';
import AppContainer from '@components/wrappers/AppContainer.vue';
</script>

<style lang="scss" scoped>
.container-app {
  position: relative;
  display: flex;
  min-height: 130vh; // to select year component don't break sidebar

  & > :nth-child(2) {
    flex: 1;
  }
}
</style>

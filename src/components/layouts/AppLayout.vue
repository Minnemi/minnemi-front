<template>
  <main class="container-app">
    <SidebarComponent />

    <section>
      <HeaderComponent />
      <AppContainer>
        <RouterView name="app"></RouterView>
      </AppContainer>
      <FooterComponent />
    </section>
  </main>
</template>

<script setup>
import SidebarComponent from '@components/partials/SidebarComponent.vue';
import HeaderComponent from '@components/partials/HeaderComponent.vue';
import AppContainer from '@components/wrappers/AppContainer.vue';
import FooterComponent from '../partials/FooterComponent.vue';
</script>

<style lang="scss" scoped>
.container-app {
  position: relative;
  display: flex;
  min-height: 100vh;

  & > :nth-child(2) {
    flex: 1;
  }
}
</style>

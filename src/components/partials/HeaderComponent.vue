<template>
  <header>
    <AppContainer wFull class="header-container">
      <div>
        <strong>Olá hugo</strong>
        <ButtonComponent styles="fill rounded small">
          Ver Perfil
        </ButtonComponent>
      </div>
      <ProfilePicture
        mode="large"
        src="https://images.unsplash.com/photo-1685659928694-6300f3eb01f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
      />
    </AppContainer>
  </header>
</template>

<script setup>
import ButtonComponent from '@components/utils/ButtonComponent.vue';
import ProfilePicture from '@components/utils/ProfilePicture.vue';
import AppContainer from '@components/wrappers/AppContainer.vue';
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: end;
  gap: 1rem;

  strong {
    color: var(--background-color);
    font-size: 1.2rem;
    font-weight: 600;
  }

  & > :nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>

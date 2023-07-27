<template>
  <div class="perfil" @click.self="$emit('close')">
    <div class="perfil-content">
      <header>
        <strong>Olá, Hugo!</strong>
        <div>
          <ProfilePicture
            mode="editable"
            src="https://images.unsplash.com/photo-1685659928694-6300f3eb01f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
          />
          <!-- <ButtonComponent
            @click="isPerfilOpen = true"
            styles="fill rounded small"
          >
            Alterar Foto
          </ButtonComponent> -->
        </div>
      </header>

      <div class="perfil-line-separator"></div>

      <form class="perfil-form">
        <div>
          <TextInput label="Nome" :attributes="attributes.username" />
          <TextInput label="Sobrenome" :attributes="attributes.username" />

          <div class="perfil-line-separator"></div>

          <TextInput label="Email" :attributes="attributes.email" />
          <TextInput
            label="Nova Senha"
            :attributes="attributes.password"
            :icon="mdiEye"
            :enableButton="true"
          />
          <TextInput
            label="Confirme Nova Senha"
            :attributes="attributes.password"
            :icon="mdiEye"
            :enableButton="true"
          />
        </div>
        <ButtonComponent class="perfil-save-btn" styles="fill large">
          Salvar
        </ButtonComponent>
      </form>

      <footer><strong>Excluir conta 😥</strong></footer>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '@components/utils/ButtonComponent.vue';
import ProfilePicture from '@components/utils/ProfilePicture.vue';
import TextInput from '@@forms/TextInput.vue';

import attributes from '@@shared/formFieldsAttributes';

import { mdiEye } from '@mdi/js';
</script>

<style lang="scss" scoped>
.perfil {
  position: fixed;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;

  &-content {
    overflow: auto;

    max-width: 600px;
    width: 100%;
    padding: 1rem 5rem;

    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 13;

    display: flex;
    flex-direction: column;

    background-color: var(--page-background-color);
    background-image: url('/public/images/logo-transparent.png');
    background-position: bottom left;
    background-size: 300px;
    background-repeat: no-repeat;

    label {
      margin-bottom: 0.7rem;
    }
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        font-size: 1.5rem;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;

      & > :nth-child(1) {
        margin-bottom: 1.1rem;
      }
    }

    footer {
      text-align: center;

      margin-top: auto;

      strong {
        color: var(--red-200);
        cursor: pointer;
      }
    }
  }

  &-save-btn {
    width: 100%;
    padding: 0.8rem;

    font-size: 1rem;
  }

  &-line-separator {
    height: 2px;
    background: #a5a7e3;

    max-width: 80%;
    width: 100%;

    margin: 2rem auto;
  }

  @media (max-width: 400px) {
    &-content {
      padding: 1rem;

      form {
        gap: 0;
        & > :nth-child(1) {
          margin-bottom: 0rem;
        }
      }
    }

    &-save-btn {
      margin-top: 1rem;
    }
  }
}
</style>

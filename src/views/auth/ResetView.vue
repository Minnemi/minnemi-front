<template>
  <WrapperForm
    title="Crie uma nova senha"
    description="Digite uma nova senha e volte a tela de acesso"
    @submit.prevent="handleSubmit"
  >
    <section class="fields">
      <TextInput
        label="Nova senha"
        :attributes="attributes.password"
        :icon="mdiEye"
        :enableButton="true"
        :resetFieldOnInput="attributes.confirmPassword.name"
        :focus="true"
      />

      <TextInput
        label="Confirmar nova senha"
        :attributes="attributes.confirmPassword"
        :icon="mdiEye"
        :enableButton="true"
        :compareField="{
          label: 'Nova senha',
          name: attributes.password.name,
        }"
      />
    </section>

    <nav class="actions">
      <ButtonComponent type="submit" styles="fill font-normal" full-width>
        Alterar
      </ButtonComponent>
    </nav>

    <hr />

    <nav class="extra-options">
      <RouterLink to="/auth/sign-in" class="link">
        Lembrou sua senha? <span>Acessar conta</span>
      </RouterLink>
    </nav>
  </WrapperForm>
</template>

<script setup>
import WrapperForm from '@@forms/WrapperForm.vue';
import TextInput from '@@forms/TextInput.vue';
import ButtonComponent from '@components/ButtonComponent.vue';
import { mdiEye } from '@mdi/js';
import attributes from '@@shared/commonInputFieldsAttributes';

function handleSubmit({ target: form }) {
  const { password, confirm_password } = Object.fromEntries(new FormData(form));
  console.log('data', { password, confirm_password });
}
</script>

<style scoped lang="scss">
.actions,
.fields {
  display: flex;
  flex-direction: column;
}

.actions {
  gap: .75rem;
}

.fields {
  gap: .5rem;
}

.extra-options {
  font-size: small;
  text-align: center;
}

.link {
  span {
    font-weight: 600;
    color: var(--red-200);
  }

  &:hover span {
    text-decoration: underline;
  }
}
</style>

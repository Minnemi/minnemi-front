<template>
  <WrapperForm
    title="Criar nova conta"
    description="Comece hoje a escrever seu futuro"
    @submit.prevent="handleSubmit"
  >
    <nav class="actions">
      <ButtonComponent styles="fill login-social font-normal" full-width>
        <template v-slot:start>
          <GoogleBrand />
        </template>

        Entrar com o Google
      </ButtonComponent>

      <small class="split">ou</small>
    </nav>

    <section class="fields">
      <TextInput
        label="Nome completo"
        :attributes="attributes.fullname"
        :focus="true"
      />

      <TextInput
        label="Nome de usuário"
        :attributes="attributes.username"
      />

      <TextInput
        label="E-mail"
        :attributes="attributes.email"
      />

      <TextInput
        label="Senha"
        :attributes="attributes.password"
        :icon="mdiEye"
        :enableButton="true"
        :resetFieldOnInput="attributes.confirmPassword.name"
      />

      <TextInput
        label="Confirmar senha"
        :attributes="attributes.confirmPassword"
        :icon="mdiEye"
        :enableButton="true"
        :compareField="{
          label: 'Senha',
          name: attributes.password.name,
        }"
      />
    </section>

    <nav class="actions">
      <ButtonComponent type="submit" styles="fill font-normal" full-width>
        Criar conta
      </ButtonComponent>

      <p class="warn">
        Ao criar uma conta, você concorda com os nossos
        <RouterLink to="/policies/usage">
          <span>Termos de uso</span>
        </RouterLink>
        e
        <RouterLink to="/policies/privacy">
          <span>Políticas de Privacidade</span>
        </RouterLink>
      </p>
    </nav>

    <hr />

    <nav class="extra-options">
      <RouterLink to="/auth/sign-in" class="link">
        Já tem uma conta? <span>Acessar conta</span>
      </RouterLink>
    </nav>
  </WrapperForm>
</template>

<script setup>
import WrapperForm from '@@forms/WrapperForm.vue';
import TextInput from '@@forms/TextInput.vue';
import ButtonComponent from '@components/ButtonComponent.vue';
import GoogleBrand from '@@utils/GoogleBrandIcon.vue';
import { mdiEye } from '@mdi/js';
import attributes from '@@shared/commonInputFieldsAttributes';

function handleSubmit({ target: form }) {
  const { fullname, username, email, password, confirm_password } = Object.fromEntries(new FormData(form));
  console.log('data', { fullname, username, email, password, confirm_password });
}
</script>

<style scoped lang="scss">
.actions,
.fields,
.extra-options {
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

.link,
.warn {
  span {
    font-weight: 600;
  }
}

.link {
  span {
    color: var(--red-200);
  }

  &:hover span {
    text-decoration: underline;
  }
}

.warn {
  text-align: center;
  font-size: small;

  span {
    color: var(--blue-200);

    &:hover {
      text-decoration: underline;
    }
  }
}

.split {
  text-align: center;
}
</style>

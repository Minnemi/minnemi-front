<template>
  <WrapperForm
    title="Criar nova conta"
    description="Comece hoje a escrever seu futuro"
  >
    <nav class="actions">
      <ButtonComponent styles="fill login-social font-normal" full-width>
        <template v-slot:start>
          <GoogleBrand />
        </template>

        Entrar com o Google
      </ButtonComponent>

      <small class="slipt">ou</small>
    </nav>

    <section class="fields">
      <TextInput
        label="Nome completo"
        :attributes="attributes.fullname"
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
      />

      <TextInput
        label="Confirmar senha"
        :attributes="attributes.confirmPassword"
        :icon="mdiEye"
        :enableButton="true"
      />
    </section>

    <nav class="actions">
      <ButtonComponent type="submit" styles="fill font-normal" full-width>
        Criar conta
      </ButtonComponent>

      <p class="warn">
        Ao criar uma conta, você concorda com os nossos
        <RouterLink to="/policy/use">
          <span>Termos de uso</span>
        </RouterLink>
        e
        <RouterLink to="/policy/privacy">
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

.slipt {
  text-align: center;
}
</style>

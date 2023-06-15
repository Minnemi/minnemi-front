<template>
  <WrapperForm
    title="Acessa conta"
    description="comece hoje a escrever seu futuro"
  >
    <section class="fields">
      <TextInput
        label="Nome de usuário"
        :attributes="attributes.username"
      />

      <TextInput
        label="Senha"
        :attributes="attributes.password"
        :icon="mdiEye"
        :enableButton="true"
      />
    </section>

    <nav class="actions">
      <ButtonComponent type="submit" styles="fill font-normal" full-width>
        Acessar conta
      </ButtonComponent>

      <ButtonComponent styles="fill login-social font-normal" full-width>
        <template v-slot:start>
          <GoogleBrand />
        </template>

        Entrar com o Google
      </ButtonComponent>
    </nav>

    <hr />

    <nav class="extra-options">
      <RouterLink to="/auth/recover" class="link">
        Esqueceu sua senha? <span>Recuperar conta</span>
      </RouterLink>

      <RouterLink to="/auth/register" class="link">
        Ainda não tem uma conta? <span>Crie uma conta</span>
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

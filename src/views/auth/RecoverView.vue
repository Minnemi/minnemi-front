<template>
  <WrapperForm
    title="Esqueceu sua senha?"
    description="Insira seu e-mail para receber o link de alteração"
    styles="expand"
  >
    <section class="fields">
      <TextInput
        label="E-mail"
        :attributes="attributes.email"
        :icon="mdiEmail"
        :focus="true"
      />
    </section>

    <nav class="actions">
      <ButtonComponent type="submit" styles="fill font-normal" full-width>
        Enviar
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
import { mdiEmail } from '@mdi/js';
import attributes from '@@shared/commonInputFieldsAttributes';
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

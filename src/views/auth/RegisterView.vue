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
      <ButtonComponent type="submit" data-submit-form styles="fill font-normal" full-width>
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

  <NotifyComponent v-if="notifyType === 'success' || notifyType === 'error'">
    <template v-slot:title>
      <div v-if="notifyType === 'error'" class="notifyTitle">
        <svg-icon type="mdi" size="2rem" :path="mdiAlertCircle" />
        Erro ao tentar criar conta!
      </div>
    </template>

    <template v-slot:message>
      <span v-if="notifyType === 'error'">
        {{ notifyError }}
      </span>
    </template>

    <template v-slot:extra>
      <ButtonComponent @click="closeNotify">
        <u>Fechar agora</u>. Fechar em {{ notifyTimer }}s
      </ButtonComponent>
    </template>
  </NotifyComponent>
</template>

<script setup>
import WrapperForm from '@@forms/WrapperForm.vue';
import TextInput from '@@forms/TextInput.vue';
import ButtonComponent from '@components/utils/ButtonComponent.vue';
import GoogleBrand from '@@utils/GoogleBrandIcon.vue';
import NotifyComponent from '@@utils/NotifyComponent.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiEye, mdiAlertCircle } from '@mdi/js';
import attributes from '@@shared/commonInputFieldsAttributes';
import { ref } from 'vue';

const notifyType = ref('');
const notifyError = ref('');
const notifyTimer = ref(7);
const notifyInterval = ref(setInterval);

function closeNotify() {
  clearInterval(notifyInterval.value);
  notifyTimer.value = 7;
  notifyType.value = 'close';
}

function handleSubmit({ target: form }) {
  const { fullname, username, email, password, confirm_password } = Object.fromEntries(new FormData(form));
  console.log('Dados que serão enviados ao servidor:', { fullname, username, email, password, confirm_password });

  try {
    throw new Error('Erro ao tentar se conectar com o servidor');
  } catch (error) {
    notifyType.value = 'error';
    notifyError.value = error.message;
    notifyTimer.value += 5;
  }

  notifyInterval.value = setInterval(() => {
    notifyTimer.value -= 1;

    if (notifyTimer.value <= 0) {
      closeNotify();
    }
  }, 1000);
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

.notifyTitle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>

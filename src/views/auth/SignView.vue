<template>
  <WrapperForm
    title="Acessa conta"
    description="comece hoje a escrever seu futuro"
    @submit.prevent="handleSubmit"
  >
    <section class="fields">
      <TextInput
        label="Nome de usuário"
        :attributes="attributes.username"
        :focus="true"
      />

      <TextInput
        label="Senha"
        :attributes="attributes.password"
        :icon="mdiEye"
        :enableButton="true"
      />
    </section>

    <nav class="actions">
      <ButtonComponent type="submit" data-submit-form disabled styles="fill font-normal" full-width>
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

  <NotifyComponent v-if="notifyType === 'success' || notifyType === 'error'">
    <template v-slot:title>
      <div v-if="notifyType === 'error'" class="notifyTitle">
        <svg-icon type="mdi" size="2rem" :path="mdiAlertCircle" />
        Erro ao tentar acessar conta!
      </div>
    </template>

    <template v-slot:message>
      <span v-if="notifyType === 'error'">
        {{ notifyError }}
      </span>
    </template>

    <template v-slot:extra>
      <ButtonComponent @click="closeNotify">
        <u>Fechar agora</u> ou fechar em {{ notifyTimer }}s ou
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
  const { username, password } = Object.fromEntries(new FormData(form));
  console.log('Dados que serão enviados ao servidor:', { username, password });

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

.link {
  span {
    font-weight: 600;
    color: var(--red-200);
  }

  &:hover span {
    text-decoration: underline;
  }
}

.notifyTitle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>

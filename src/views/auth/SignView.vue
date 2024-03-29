<template>
  <WrapperForm
    :title="$t('loginPage.title')"
    :description="$t('loginPage.description')"
    @submit.prevent="handleSubmit"
  >
    <section class="fields">
      <TextInput
        :label="$t('formsLabels.username')"
        :attributes="attributes.username"
        :focus="true"
      />

      <TextInput
        :label="$t('formsLabels.password')"
        :attributes="attributes.password"
        :icon="mdiEye"
        :enableButton="true"
      />
    </section>

    <nav class="actions">
      <ButtonComponent type="submit" data-submit-form styles="fill font-normal" full-width>
        {{ $t('loginPage.button.submit') }}
      </ButtonComponent>

      <ButtonComponent styles="fill login-social font-normal" full-width>
        <template v-slot:start>
          <GoogleBrand />
        </template>

        {{ $t('loginPage.button.google') }}
      </ButtonComponent>
    </nav>

    <hr />

    <nav class="extra-options">
      <RouterLink to="/auth/recover" class="link">
        {{ $t('loginPage.redirect.recover.first') }}
        <span>{{ $t('loginPage.redirect.recover.last') }}</span>
      </RouterLink>

      <RouterLink to="/auth/register" class="link">
        {{ $t('loginPage.redirect.register.first') }}
        <span>{{ $t('loginPage.redirect.register.last') }}</span>
      </RouterLink>
    </nav>
  </WrapperForm>

  <NotifyComponent v-if="notifyType === 'success' || notifyType === 'error'">
    <template v-slot:title>
      <div v-if="notifyType === 'error'" class="notifyTitle">
        <svg-icon type="mdi" size="2rem" :path="mdiAlertCircle" />
        {{ $t('loginPage.errorModal.title') }}
      </div>
    </template>

    <template v-slot:message>
      <span v-if="notifyType === 'error'">
        {{ notifyError }}
      </span>
    </template>

    <template v-slot:extra>
      <ButtonComponent @click="closeNotify">
        <u>{{ $t('loginPage.errorModal.close.now') }}</u>.
        {{ $t('loginPage.errorModal.close.in') }} {{ notifyTimer }}s
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
import attributes from '@@shared/formFieldsAttributes';
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

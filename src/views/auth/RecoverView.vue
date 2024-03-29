<template>
  <WrapperForm
    :title="$t('recoverPage.title')"
    :description="$t('recoverPage.description')"
    styles="expand"
    @submit.prevent="handleSubmit"
  >
    <section class="fields">
      <TextInput
        :label="$t('formsLabels.email')"
        :attributes="attributes.email"
        :icon="mdiEmail"
        :focus="true"
      />
    </section>

    <nav class="actions">
      <ButtonComponent type="submit" data-submit-form styles="fill font-normal" full-width>
        {{ $t('recoverPage.button.submit') }}
      </ButtonComponent>
    </nav>

    <hr />

    <nav class="extra-options">
      <RouterLink to="/auth/sign-in" class="link">
        {{ $t('recoverPage.redirect.login.first') }}
        <span>
          {{ $t('recoverPage.redirect.login.last') }}
        </span>
      </RouterLink>
    </nav>
  </WrapperForm>

  <NotifyComponent v-if="notifyType === 'success' || notifyType === 'error'">
    <template v-slot:title>
      <div v-if="notifyType === 'success'" class="notifyTitle">
        <svg-icon type="mdi" size="2rem" :path="mdiCheckCircle" />
        {{ $t('recoverPage.modal.success.title') }}
      </div>
      <div v-if="notifyType === 'error'" class="notifyTitle">
        <svg-icon type="mdi" size="2rem" :path="mdiAlertCircle" />
        {{ $t('recoverPage.modal.error.title') }}
      </div>
    </template>

    <template v-slot:message>
      <span v-if="notifyType === 'success'">
        {{ $t('recoverPage.modal.success.description') }} "{{ notifyEmail }}".
        {{ $t('recoverPage.modal.success.details') }}
      </span>

      <span v-if="notifyType === 'error'">
        {{ $t('recoverPage.modal.error.description') }} "{{ notifyEmail }}".<br/>
        {{ $t('recoverPage.modal.error.details') }}: {{ notifyError }}
      </span>
    </template>

    <template v-slot:extra>
      <ButtonComponent @click="closeNotify">
        <u>
          {{ $t('recoverPage.modal.close.now') }}
        </u>. {{ $t('recoverPage.modal.close.in') }} {{ notifyTimer }}s
      </ButtonComponent>
    </template>
  </NotifyComponent>
</template>

<script setup>
import WrapperForm from '@@forms/WrapperForm.vue';
import TextInput from '@@forms/TextInput.vue';
import ButtonComponent from '@components/utils/ButtonComponent.vue';
import NotifyComponent from '@@utils/NotifyComponent.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiEmail, mdiCheckCircle, mdiAlertCircle } from '@mdi/js';
import attributes from '@@shared/formFieldsAttributes';
import { ref } from 'vue';

const notifyEmail = ref(null);
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
  const { email } = Object.fromEntries(new FormData(form));
  notifyEmail.value = email;

  try {
    notifyType.value = 'success';
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

.notifyTitle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>

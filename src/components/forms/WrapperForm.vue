<template>
  <form
    ref="formElement"
    class="form"
    :class="styles"
    method="post"
    autocomplete="off"
  >
    <div class="header">
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
    </div>

    <div class="body">
      <slot></slot>
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
const $t = useI18n().t;
import { formErrors } from '@@shared/formErrors';

const formElement = ref(null);

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: String,
  styles: {
    type: String,
    default: '',
  },
});

function displayError(input, errorKey = '') {
  const errorMessage = errorKey !== '' ? $t(errorKey) : '';
  const errorBox =
    input.parentNode.parentNode.querySelector('.input-error-box');

  errorMessage === ''
    ? input.parentNode?.classList.remove('error')
    : input.parentNode?.classList.add('error');

  input.setCustomValidity(errorMessage);
  errorBox.innerText = errorMessage;
}

function validateField(input) {
  const { name, value, validity } = input;
  const compareLabelName = input.dataset?.compareLabel;
  let errorKey = '';

  if (compareLabelName) {
    const compareValue = document.getElementsByName(compareLabelName)[0]?.value;

    if (compareValue !== value) {
      errorKey = formErrors.equals(name);
    }
  }

  if (validity.patternMismatch || validity.typeMismatch) {
    errorKey = formErrors.pattern(name);
  }
  else if (validity.valueMissing) {
    errorKey = formErrors.required();
  }
  else if (validity.tooShort) {
    errorKey = formErrors.minLength(name);
  }
  else if (validity.tooLong) {
    errorKey = formErrors.maxLength(name);
  }

  displayError(input, errorKey);
}

function addTriggerSubmitButton() {
  const form = formElement.value;
  if (!form) return;

  const submitButton = form.querySelector('button[type=submit]');
  if (!submitButton) return;

  submitButton.addEventListener('click', () => {
    const fields = form.getElementsByTagName('input');
    for (const input of fields) validateField(input);
  });
}

onMounted(() => {
  addTriggerSubmitButton();
});
</script>

<style scoped lang="scss">
.form,
.body {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form {
  padding: 2rem 1.5rem;
  max-width: 95%;
  width: 420px;
  color: var(--text-principal);
  border-radius: 12px;
  border: 2px solid var(--border-color);
  background-color: var(--elements-background-color);

  animation: g-show-expand 0.3s both normal;

  &.expand {
    width: 600px;
  }
}

.header {
  text-align: center;
}

.title,
.description {
  &::first-letter {
    text-transform: uppercase;
  }
}

.title {
  color: var(--red-200);
  font-weight: 600;
}

.description {
  color: var(--text-secondary);
}
</style>

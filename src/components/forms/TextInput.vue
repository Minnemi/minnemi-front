<template>
  <label class="label">
    <div class="describe">
      {{ label }}
    </div>

    <div ref="inputBoxRef" class="input">
      <input ref="inputRef" class="input-field" @input="handleInput" />

      <button
        type="button"
        class="input-button"
        :disabled="Boolean(!enableButton)"
        :data-hidden="Boolean(!icon)"
        @click="handleClick"
      >
        <svg-icon type="mdi" :path="icon" />
      </button>
    </div>

    <div class="message" :data-message="errorMessage"></div>
  </label>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { describeError } from '@@shared/inputErrorsMessages.js';

const inputBoxRef = ref(null);
const inputRef = ref(null);
const errorMessage = ref('');
const props = defineProps({
  label: String,
  attributes: {
    type: Object,
    default() {
      return { type: 'text' };
    },
  },
  icon: {
    type: String,
    default: '',
  },
  enableButton: {
    type: Boolean,
    default: false,
  },
  focus: Boolean,
  resetFieldOnInput: String,
  compareField: Object,
});

function handleClick() {
  inputRef.value.type = inputRef.value.type === 'password' ? 'text' : 'password';
}

function resetField() {
  if (props.resetFieldOnInput) {
    const fieldToReset = document.getElementsByName(props.resetFieldOnInput)[0];

    if (fieldToReset && fieldToReset.value !== fieldToReset.defaultValue) {
      fieldToReset.value = fieldToReset.defaultValue;
      fieldToReset.dispatchEvent(new Event('input'));
    }
  }
}

function execCheckValidity(msg = '') {
  inputRef.value.setCustomValidity(msg);

  const buttonSubmitForm = document.querySelector('[data-submit-form]') || null;

  if (!inputRef.value.checkValidity()) {
    inputBoxRef.value.classList.add('error');
    errorMessage.value = inputRef.value.validationMessage;
    buttonSubmitForm && buttonSubmitForm.setAttribute('disabled', true);
    return;
  }

  inputBoxRef.value.classList.remove('error');
  errorMessage.value = '';
  buttonSubmitForm && buttonSubmitForm.removeAttribute('disabled');
}

function validation() {
  if (props.compareField) {
    const compareFieldValue = document.getElementsByName(
      props.compareField.name,
    )[0].value;

    let msg;

    if (compareFieldValue !== inputRef.value.value) {
      msg = describeError.mustBeEquals(props.compareField.label);
    }

    return execCheckValidity(msg);
  }

  const validity = inputRef.value.validity;

  if (
    validity.patternMismatch ||
    validity.typeMismatch
  ) {
    const msg = describeError.pattern(inputRef.value.dataset.acceptedChars);
    return execCheckValidity(msg);
  }

  if (validity.valueMissing) {
    const msg = describeError.required();
    return execCheckValidity(msg);
  }

  if (validity.tooShort) {
    const msg = describeError.minLength(inputRef.value.minLength);
    return execCheckValidity(msg);
  }

  if (validity.tooLong) {
    const msg = describeError.maxLength(inputRef.value.maxLength);
    return execCheckValidity(msg);
  }

  execCheckValidity('');
}

function handleInput() {
  resetField();
  validation();
}

function insertAttributesIntoInputElement(attributes) {
  for (const attr in attributes) {
    inputRef.value.setAttribute(attr, attributes[attr]);
  }
}

function autoFocus(enable) {
  if (enable) {
    inputRef.value.focus();
  }
}

onMounted(() => {
  insertAttributesIntoInputElement(props.attributes);
  autoFocus(props.focus);
});
</script>

<style scoped lang="scss">
.label {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  color: var(--text-principal);
}

.describe,
.message {
  font-weight: 600;
}

.input {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 9px;
  border: 2px solid var(--login-field-border-color);
  background-color: var(--login-field-background-color);

  &.error {
    border-color: var(--red-200);
  }

  &-field,
  &-button {
    border-radius: 5px;
    background-color: var(--login-field-background-color);
  }

  &-field {
    margin: 0 2px;
    padding: 0.5rem 1rem;
    width: 100%;
    color: var(--text-principal);
    border: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    &::placeholder {
      color: var(--login-field-color);
    }
  }

  &-button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    transition: background-color 0.2s, color 0.2s;

    &[data-hidden='true'] {
      padding: 0.5rem 0;
      width: 1px;
      opacity: 0;
    }

    &:disabled {
      pointer-events: none;
    }

    &:not(:disabled) {
      &:hover {
        color: var(--login-field-color-hover);
        border-color: var(--login-field-border-color-hover);
        background-color: var(--login-field-background-color-hover);
      }

      &:active {
        color: var(--login-field-color-active);
        border-color: var(--login-field-border-color-active);
        background-color: var(--login-field-background-color-active);
      }
    }
  }
}

.message {
  padding: 0 0.5rem;
  width: 100%;
  font-size: 0.8rem;
  color: var(--red-200);

  &::after {
    content: attr(data-message);
  }
}
</style>

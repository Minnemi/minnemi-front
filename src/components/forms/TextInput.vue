<template>
  <label class="label">
    <div class="describe">
      {{ label }}
    </div>

    <div ref="inputBoxRef" class="input">
      <input ref="inputRef" class="input-field" @input="handleInput"/>

      <button
        type="button"
        class="input-button"
        :disabled="Boolean(!icon)"
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

const inputBoxRef = ref(null);
const inputRef = ref(null);
const errorMessage = ref('');
const props = defineProps({
  validityType: {
    type: String,
    default: 'text',
  },
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
});

function insertAttributesIntoInputElement(attributes) {
  for (const attr in attributes) {
    inputRef.value.setAttribute(attr, attributes[attr]);
  }
}

function handleClick() {
  inputRef.value.type = inputRef.value.type === 'password' ? 'text' : 'password';
}

function validation() {
  if (inputRef.value.checkValidity()) {
    inputBoxRef.value.classList.remove('error');
    return errorMessage.value = '';
  }

  inputBoxRef.value.classList.add('error');
  errorMessage.value = inputRef.value.validationMessage;
}

function handleInput() {
  validation();
}

onMounted(() => {
  insertAttributesIntoInputElement(props.attributes);
});
</script>

<style scoped lang="scss">
.label {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: .5rem;
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
    background-color: var(--login-field-background-color) red;
  }

  &-field {
    margin: 0 2px;
    padding: .5rem 1rem;
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

    padding: .5rem 1rem;
    font-size: 1rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    transition: background-color .2s, color .2s;
  }

  &-button:disabled {
    padding: .5rem 0;
    width: 1px;
    opacity: 0;
  }

  &-field[type='password'] + &-button:not(disabled) {
    &:hover {
      color: var(--login-field-color-hover);
      border-color: var(--login-field-border-color-hover);
      background-color: var(--login-field-background-color-hover);
    }

    &:active {
      border-color: var(--login-field-border-color-active);
      background-color: var(--login-field-background-color-active);
    }
  }
}

.message {
  padding: 0 .5rem;
  width: 100%;
  font-size: .8rem;
  color: var(--red-200);

  &::after {
    content: attr(data-message);
  }
}
</style>

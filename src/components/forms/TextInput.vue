<template>
  <label class="label">
    <div class="describe">
      {{ label }}
      <span v-if="!hiddenRequiredMark && attributes.required">*</span>
    </div>

    <div ref="inputBoxRef" class="input">
      <input
        ref="inputRef"
        class="input-field"
        :data-compare-label="compareField"
        @input="handleInput"
      />

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

    <div class="message input-error-box"></div>
  </label>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';

const inputBoxRef = ref(null);
const inputRef = ref(null);
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
  compareField: {
    type: String,
    default: '',
  },
  hiddenRequiredMark: {
    type: Boolean,
    default: false,
  },
});

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

function handleClick() {
  inputRef.value.type =
    inputRef.value.type === 'password' ? 'text' : 'password';
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

  &.error {
    border-color: var(--red-200);

    ~ .message {
      display: block;
    }
  }
}

.message {
  display: none;
  padding: 0 0.5rem;
  width: 100%;
  font-size: 0.8rem;
  color: var(--red-200);

  &::after {
    content: attr(data-message);
  }
}
</style>

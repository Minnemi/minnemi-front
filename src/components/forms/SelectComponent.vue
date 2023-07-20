<template>
  <label class="label">
    <div class="describe">
      {{ label }} <span v-if="attributes.required">*</span>
    </div>

    <div ref="selectBoxRef" class="select">
      <select
        ref="selectRef"
        class="select-field"
        :data-compare-name="compareField?.name"
        :data-compare-label="compareField?.label"
        @input="handleSelect"
      >
        <option v-for="(item, index) in data" :key="index" :value="item">
          {{ item }}
        </option>
      </select>

      <button
        type="button"
        class="select-button"
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
import { describeError } from '@@shared/inputErrorsMessages';

const selectBoxRef = ref(null);
const selectRef = ref(null);
const errorMessage = ref('');
const props = defineProps({
  label: String,
  data: Array,
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
  compareField: Object,
});

function handleClick() {
  selectRef.value.type =
    selectRef.value.type === 'password' ? 'text' : 'password';
}

function insertAttributesIntoselectElement(attributes) {
  for (const attr in attributes) {
    selectRef.value.setAttribute(attr, attributes[attr]);
  }
}

function autoFocus(enable) {
  if (enable) {
    selectRef.value.focus();
  }
}

function resetMessageError() {
  if (selectRef.value.required) {
    return selectRef.value.setCustomValidity(describeError.required());
  }

  return selectRef.value.setCustomValidity('');
}

function execCheckValidity(msg = '') {
  selectRef.value.setCustomValidity(msg);

  if (!selectRef.value.checkValidity()) {
    selectBoxRef.value.classList.add('error');
    errorMessage.value = selectRef.value.validationMessage;
    return;
  }

  selectBoxRef.value.classList.remove('error');
  errorMessage.value = '';
}

function validation() {
  if (props.compareField) {
    const compareFieldValue = document.getElementsByName(
      props.compareField.name,
    )[0].value;

    let msg;

    if (compareFieldValue !== selectRef.value.value) {
      msg = describeError.mustBeEquals(props.compareField.label);
    }

    return execCheckValidity(msg);
  }

  const validity = selectRef.value.validity;

  if (validity.patternMismatch || validity.typeMismatch) {
    const msg = describeError.pattern(selectRef.value.dataset.acceptedChars);
    return execCheckValidity(msg);
  }

  if (validity.valueMissing) {
    const msg = describeError.required();
    return execCheckValidity(msg);
  }

  if (validity.tooShort) {
    const msg = describeError.minLength(selectRef.value.minLength);
    return execCheckValidity(msg);
  }

  if (validity.tooLong) {
    const msg = describeError.maxLength(selectRef.value.maxLength);
    return execCheckValidity(msg);
  }

  execCheckValidity('');
}

function handleSelect() {
  validation();
}

onMounted(() => {
  insertAttributesIntoselectElement(props.attributes);
  autoFocus(props.focus);
  resetMessageError();
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

.select {
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
    font-size: 1.1rem;
    font-weight: bold;

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

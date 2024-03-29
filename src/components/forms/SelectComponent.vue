<template>
  <label class="label">
    <div class="describe">
      {{ label }} <span v-if="attributes.required">*</span>
    </div>

    <div ref="selectBoxRef" class="select">
      <select
        ref="selectRef"
        class="select-field"
        @input="handleSelect"
      >
        <option v-for="(item, index) in data" :key="index" :value="item">
          {{ item }}
        </option>
      </select>
    </div>

    <div class="message" :data-message="errorMessage"></div>
  </label>
</template>

<script setup>
import { ref, onMounted } from 'vue';

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
  focus: Boolean,
});

function insertAttributesIntoSelectElement(attributes) {
  for (const attr in attributes) {
    selectRef.value.setAttribute(attr, attributes[attr]);
  }
}

function autoFocus(enable) {
  if (enable) {
    selectRef.value.focus();
  }
}

onMounted(() => {
  insertAttributesIntoSelectElement(props.attributes);
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

<template>
  <label class="label">
    <div class="describe">
      {{ label }} <span v-if="attributes.required">*</span>
    </div>

    <textarea ref="textareaRef" class="textarea" @input="handleInput"></textarea>

    <div class="message" :data-message="errorMessage"></div>
  </label>
</template>

<script setup>
import { ref } from 'vue';

const textareaRef = ref(null);
const errorMessage = ref('');
defineProps({
  label: String,
  attributes: Object,
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

.textarea {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
  width: 100%;
  min-height: 500px;
  color: var(--text-principal);
  border-radius: 9px;
  border: 2px solid var(--login-field-border-color);
  background-color: var(--login-field-background-color);

  &::placeholder {
    color: var(--login-field-color);
  }
}

.message {
  display: none;
  padding: 0 .5rem;
  width: 100%;
  font-size: .8rem;
  color: var(--red-200);

  &::after {
    content: attr(data-message);
  }
}
</style>

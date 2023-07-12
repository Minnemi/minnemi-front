<template>
  <form
    ref="formElement"
    class="form"
    :class="styles"
    method="post"
    autocomplete="off"
    @submit.prevent="handleSubmit"
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

const formElement = ref(null);
defineProps({
  title: {
    type: String,
    required: true
  },
  description: String,
  styles: {
    type: String,
    default: ''
  },
});

function handleSubmit(event) {
  console.log(event);
}

function triggerSubmitButton() {
  if (!formElement.value) return;

  const submitButton = formElement.value.querySelector('button[type=submit]');

  if (!submitButton) return;

  submitButton.addEventListener('click', () => {
    formElement.value.classList.add('g-form-error');
  });
}

onMounted(() => {
  triggerSubmitButton();
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

  animation: g-show-expand .3s both normal;

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

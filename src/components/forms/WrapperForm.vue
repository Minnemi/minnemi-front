<template>
  <section class="container">
    <form class="form">
      <div class="header">
        <h2 class="title">{{ title }}</h2>
        <p class="description">{{ description }}</p>
      </div>

      <div class="body">
        <slot></slot>
      </div>
    </form>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import Wave from '@@lib/wave';

defineProps({
  title: {
    type: String,
    required: true
  },
  description: String,
});

onMounted(() => {
  new Wave(true);
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 3rem 0;
  width: 100%;
  min-height: 100vh;
}

.form,
.body {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.form {
  padding: 2rem 1.5rem;
  max-width: 95%;
  width: 420px;
  color: var(--text-principal);
  border-radius: 12px;
  border: 2px solid var(--border-color);
  background-color: var(--elements-background-color);
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

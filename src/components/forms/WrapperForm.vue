<template>
  <form class="form" autocomplete="off" autocapitalize="true">
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
defineProps({
  title: {
    type: String,
    required: true
  },
  description: String,
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
}

@keyframes g-show-expand {
  50% {
    transform: scale(1.01);
  }
  0%, 100% {
    transform: scale(1);
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

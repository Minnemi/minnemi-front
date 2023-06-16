<template>
  <button
    ref="button"
    :type="type || 'button'"
    class="button"
    :class="styles"
    :onclick="onclick"
  >
    <slot name="start"></slot>

    <span class="text">
      <slot></slot>
    </span>

    <slot name="end"></slot>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const button = ref(null);
const props = defineProps({
  type: String,
  styles: String,
  width: String,
  fullWidth: Boolean,
  onclick: () => {},
});

function setButtonStyles() {
  if (props.width) {
    button.value.style.width = props.width;
  }

  if (props.fullWidth) {
    button.value.style.width = '100%';
  }

  if (props.fullWidth && props.width) {
    button.value.style.minWidth = props.width;
  }
}

onMounted(() => {
  if (button.value) {
    setButtonStyles();
  }
});
</script>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  padding: .5rem .75rem;
  width: min-content;
  max-width: 100%;
  font-weight: 600;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 5px;
  border: 1px solid transparent;
  overflow: hidden;

  transition: background-color .2s ease, border-color .2s ease;
}

.simple {
  &:hover {
    background-color: var(--border-color);
  }

  &:active {
    background-color: var(--text-secondary);
  }
}

.text {
  &-start {
    justify-content: flex-start;
  }

  &-end {
    justify-content: flex-end;
  }
}

.small {
  padding: .25rem 1rem;
  font-size: .75rem;
}

.font {
  &-small {
    font-size: .75rem;
  }

  &-normal {
    font-size: 1rem;
  }

  &-large {
    font-size: 1.25rem;
  }
}

.rounded {
  border-radius: 100px;
}

.fill {
  --p-color: var(--red-200);
  color: var(--gray-100);
  border-color: var(--p-color);
  background-color: var(--p-color);

  &:hover {
    --p-color: var(--red-300);
  }

  &:active {
    --p-color: var(--red-100);
  }
}

.outline {
  color: var(--text-principal);
  border-color: var(--text-principal);

  &:hover {
    background-color: var(--border-color);
  }

  &:active {
    background-color: var(--text-secondary);
  }
}

.text-hidden .text {
  display: none;
  opacity: 0;
  pointer-events: none;
}

.login-social {
  color: var(--login-field-color);
  border-color: var(--login-field-border-color);
  background-color: var(--login-field-background-color);

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
</style>

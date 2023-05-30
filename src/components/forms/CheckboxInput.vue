<template>
  <label :for="id" class="checkbox">
    <input
      :id="id"
      :name="name"
      type="checkbox"
      class="checkbox-input"
    />

    <div class="checkbox-mark"></div>
  </label>
</template>

<script setup>
defineProps({
  id: String,
  name: String,
});
</script>

<style scoped lang="scss">
.checkbox {
  --size: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: var(--size);
  min-height: var(--size);
  width: var(--size);
  height: var(--size);
}

.checkbox-input {
  cursor: pointer;
  position: absolute;
  height: 0;
  width: 0;
  opacity: 0;

  &:checked ~ .checkbox-mark {
    border-color: var(--checkbox-border-color-checked);
    background-color: var(--checkbox-background-color-checked);

    &::before {
      border-color: var(--checkbox-mark-color);
    }
  }
}

.checkbox-mark {
  --size: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);
  border-radius: 3px;
  border: 1px solid var(--checkbox-border-color);
  background-color: var(--checkbox-background-color);

  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 8px;
    border: solid transparent;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    transition: border-color .2s;
  }
}
</style>

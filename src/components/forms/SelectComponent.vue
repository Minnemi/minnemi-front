<template>
  <div class="select">
    <div @click="handleToggleSelect">
      <div class="select-name">Selecione uma opção</div>
    </div>
    <div class="select-options" v-if="isSelectOpen">
      <div @click="handleToggleSelect">1</div>
      <div @click="handleToggleSelect">2</div>
      <div @click="handleToggleSelect">3</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isSelectOpen = ref(false);

function handleToggleSelect() {
  isSelectOpen.value = !isSelectOpen.value;
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;

  &,
  &-options > * {
    padding: 0.7rem;

    background: var(--red-200);

    color: var(--white);

    border-radius: 8px;

    font-weight: 600;
    font-size: 1rem;

    border: 0;
    outline: 0;

    cursor: pointer;
  }
  &-options {
    position: absolute;

    left: 0;
    right: 0;
    margin-top: 0.6rem;
  }
  &-name {
    color: white;
  }
}
</style>

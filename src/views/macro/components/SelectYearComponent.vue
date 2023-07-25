<template>
  <div role="select" class="select" v-on-click-outside="handleCloseSelect">
    <div @click="handleToggleSelect">
      <div class="select-name">{{ selectTitle }}</div>
    </div>

    <div class="select-options" v-if="isSelectOpen">
      <div role="option" @click="handleEmitValue(1)">1 ano</div>
      <div role="option" @click="handleEmitValue(2)">2 anos</div>
      <div role="option" @click="handleEmitValue(3)">3 anos</div>
      <div role="option" @click="handleEmitValue(4)">4 anos</div>
      <div role="option" @click="handleEmitValue(5)">5 anos</div>
    </div>

    <IconComponent
      @click="handleToggleSelect"
      :class="{ 'select-icon--rotate': isSelectOpen }"
      class="select-icon"
      :path="mdiChevronDown"
      :size="25"
    />
  </div>
</template>

<script setup>
import { mdiChevronDown } from '@mdi/js';
import { vOnClickOutside } from '@vueuse/components';

import { computed, ref } from 'vue';
import IconComponent from '@@utils/IconComponent.vue';

const emit = defineEmits(['change']);

const isSelectOpen = ref(false);
const selectValue = ref('');

const selectTitle = computed(() => {
  return selectValue.value || 'Selecione uma opção';
});

function handleToggleSelect() {
  isSelectOpen.value = !isSelectOpen.value;
}
function handleCloseSelect() {
  isSelectOpen.value = false;
}
function handleEmitValue(value) {
  selectValue.value = value;
  isSelectOpen.value = false;

  emit('change', value);
}
</script>

<style lang="scss" scoped>
.select {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  padding: 0.5rem 1.5rem;
  min-width: 300px;

  & > :nth-child(1) {
    flex: 1;
  }

  &,
  &-options > * {
    padding: 0.7rem;

    background: var(--red-200);

    color: white;

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
    top: 35px;
    margin-top: 0.6rem;
  }
  &-name {
    color: white;
  }
  &-icon {
    color: var(--white);
  }
  &-icon--rotate {
    transform: rotate(180deg);
    transform-origin: center;
  }
}

@media (max-width: 350px) {
  .select {
    font-size: 0.8rem;
  }
}
</style>

<template>
  <div role="select" class="select" v-on-click-outside="handleCloseSelect">
    <div @click="handleToggleSelect">
      <div class="select-name">
        {{ selectedValue }}
        <span v-if="selectedValue > 1">
          {{ plural }}
        </span>
        <span v-else-if="selectedValue === 1">
          {{ singular }}
        </span>
      </div>

      <IconComponent
        :class="{ 'select-icon--rotate': isSelectOpen }"
        class="select-icon"
        :path="mdiChevronDown"
        :size="25"
      />
    </div>

    <div class="select-options" v-if="isSelectOpen">
      <div
        v-for="(value, index) in listOptions"
        :key="index"
        role="option"
        @click="handleEmitValue(value)"
      >
        {{ value }}
        <span v-if="value > 1">
          {{ plural }}
        </span>
        <span v-if="value === 1">
          {{ singular }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { mdiChevronDown } from '@mdi/js';
import { vOnClickOutside } from '@vueuse/components';
import { ref } from 'vue';
import IconComponent from '@@utils/IconComponent.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const singular = t('writeLetterPage.labels.selectDate.sulfix.singular');
const plural = t('writeLetterPage.labels.selectDate.sulfix.plural');
const emit = defineEmits(['change']);
const isSelectOpen = ref(false);
const selectedValue = ref(1);
const listOptions = [1, 2, 3, 4, 5];

function handleToggleSelect() {
  isSelectOpen.value = !isSelectOpen.value;
}

function handleCloseSelect() {
  isSelectOpen.value = false;
}

function handleEmitValue(value) {
  selectedValue.value = value;

  handleCloseSelect();
  emit('change', value);
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  padding: 0.7rem 1.5rem;
  min-width: 300px;

  & > :nth-child(1) {
    padding: 0rem 0.7rem;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

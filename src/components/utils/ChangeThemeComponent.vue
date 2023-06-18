<template>
  <button @click="changeTheme">
    <IconComponent :path="mdiPalette" :size="36"></IconComponent>
  </button>
</template>

<script setup>
import { mdiPalette } from '@mdi/js';
import IconComponent from '../utils/IconComponent.vue';
import { onMounted, reactive } from 'vue';
import { useAppStore } from '../../stores/appStore';

const appStore = useAppStore();

const state = reactive({
  themeSelected: null,
  themes: ['minnemi', 'light', 'dark'],
});

const changeTheme = () => {
  state.themeSelected++;

  if (state.themeSelected === state.themes.length) {
    state.themeSelected = 0;
  }

  appStore.setTheme(state.themes[state.themeSelected]);
};

onMounted(
  () => (state.themeSelected = state.themes.indexOf(appStore.getTheme)),
);
</script>

<style module></style>

<style scoped>
button:hover {
  color: var(--red-200);
}
</style>

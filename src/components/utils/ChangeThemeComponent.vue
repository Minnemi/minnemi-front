<template>
  <ButtonComponent styles="simple outline" @click="changeTheme">
    <IconComponent :path="mdiPalette" :size="36"></IconComponent>
  </ButtonComponent>
</template>

<script setup>
import { mdiPalette } from '@mdi/js';
import ButtonComponent from './ButtonComponent.vue';
import IconComponent from './IconComponent.vue';
import { onMounted, reactive } from 'vue';
import { useAppStore } from '@@stores/appStore';

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

<style scoped></style>

import { useBase64, useColorMode, useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, watch } from 'vue';

export const useAppStore = defineStore('app', () => {
  const state = useLocalStorage('app', {
    loggedIn: false,
    theme: import.meta.env.VITE_APP_THEME,
  });

  const isLogged = computed(() => state.value.loggedIn);
  const getTheme = computed(() => state.value.theme);

  const setLogged = (value) => (state.value.loggedIn = value);
  const setTheme = (theme) => (state.value.theme = theme);

  const colorMode = useColorMode({
    selector: 'body',
    attribute: 'data-theme',
    initialValue: getTheme.value,
    modes: {
      minnemi: 'minnemi',
    },
    storageKey: null
  });

  watch(getTheme, (theme) => (colorMode.value = theme));

  return {
    isLogged,
    getTheme,
    setLogged,
    setTheme,
  };
});

import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

const useAppStore = defineStore('app', () => {
  const state = reactive({
    loggedIn: false,
  });

  const isLogged = computed(() => state.loggedIn);

  const setLogged = (value) => (state.loggedIn = value);

  return {
    state,
    isLogged,
    setLogged,
  };
});

export { useAppStore };

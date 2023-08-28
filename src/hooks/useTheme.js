import { onMounted, reactive } from 'vue';
import { useAppStore } from '@@stores/appStore';

export default function useTheme() {
  const appStore = useAppStore();

  const state = reactive({
    themeSelected: null,
    themes: ['minnemi', 'dark'],
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

  return { changeTheme };
}

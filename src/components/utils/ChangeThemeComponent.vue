<template>
  <ButtonComponent styles="simple outline" @click="changeTheme">
    <IconComponent :path="mdiPalette" :size="36"></IconComponent>
  </ButtonComponent>
</template>

<script setup>
import { mdiPalette } from '@mdi/js';
import ButtonComponent from './ButtonComponent.vue';
import IconComponent from './IconComponent.vue';

import useTheme from '@hooks/useTheme';

const { changeTheme } = useTheme();
</script>

<style scoped></style>

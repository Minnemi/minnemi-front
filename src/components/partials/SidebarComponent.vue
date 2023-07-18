<template>
  <div
    class="sidebar"
    :class="{ 'sidebar--expanded': isSidebarExpanded }"
    @mouseenter="expandSidebar()"
    @mouseleave="closeExpandedSidebar()"
  >
    <div>
      <div class="sidebar-logo-container">
        <img
          v-if="!isSidebarExpanded"
          class="sidebar-logo-icon"
          src="/icons/logo-icon.svg"
        />
        <img v-else class="sidebar-logo" src="/images/logo.svg" />
      </div>
      <div class="sidebar-divisor"></div>

      <ul v-if="!isSidebarExpanded">
        <li>
          <IconComponent class="sidebar-icon" :path="mdiEmail" :size="40" />
        </li>
      </ul>

      <ul v-else>
        <li>
          <IconComponent class="sidebar-icon" :path="mdiEmail" :size="40" />
          <span>Minhas Cartas</span>
        </li>
      </ul>

      <ButtonComponentVue fullWidth :styles="sidebarStatus + ' slidebar'">
        <template v-slot:start>
          <IconComponent class="sidebar-icon" :path="mdiEmail" :size="40" />
        </template>

        Minhas Cartas
      </ButtonComponentVue>
    </div>
    <!-- //sidebar footer -->
    <div>
      <ul v-if="!isSidebarExpanded">
        <li>
          <IconComponent
            class="sidebar-icon"
            :path="mdiBrightness7"
            :size="40"
          />
        </li>
        <li>
          <IconComponent
            class="sidebar-icon"
            :path="mdiLogoutVariant"
            :size="40"
          />
        </li>
      </ul>

      <ul v-else>
        <li>
          <IconComponent
            class="sidebar-icon"
            :path="mdiBrightness7"
            :size="40"
          />
          <span>Alterar Tema</span>
        </li>
        <li>
          <IconComponent
            class="sidebar-icon"
            :path="mdiLogoutVariant"
            :size="40"
          />

          <span>Sair</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { mdiEmail, mdiLogoutVariant, mdiBrightness7 } from '@mdi/js';
import { ref } from 'vue';

import ButtonComponentVue from '../utils/ButtonComponent.vue';
import IconComponent from '@@utils/IconComponent.vue';

const isSidebarExpanded = ref(false);
const sidebarStatus = ref('text-hidden');

function expandSidebar() {
  isSidebarExpanded.value = true;
  sidebarStatus.value = '';
}

function closeExpandedSidebar() {
  isSidebarExpanded.value = false;
  sidebarStatus.value = 'text-hidden';
}
</script>

<style scoped lang="scss">
.sidebar {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 5.5rem;
  min-height: 100vh;
  height: 100vh;
  padding: 1rem 1rem;

  background: white;

  overflow: hidden;

  transition: all 0.3s ease;

  ul {
    margin-top: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    gap: 10px;
  }

  li {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;

    padding: 0.4rem;

    border-radius: 10px;

    cursor: pointer;

    span {
      font-weight: 500;
      color: var(--red-200);
    }
  }

  &-icon {
    width: 40px;
    height: 40px;
    max-width: 40px;
    max-height: 40px;
    /* color: var(--red-200); */
  }

  li:hover &-icon {
    color: white;
  }

  li:hover {
    background: var(--red-200);
    span {
      color: white;
    }
  }

  &-logo-container {
    display: flex;
    justify-content: center;
  }

  &-logo-icon {
    width: 40px;
    height: 40px;
    margin: 1rem 0;
  }

  &-logo {
    height: 40px;
    margin: 1rem 0;
  }

  &-divisor {
    width: 100%;
    height: 2px;

    background-color: #a5a7e3;

    border-radius: 1px;
  }

  &--expanded {
    width: 15rem;
    overflow: visible;
  }
}
</style>

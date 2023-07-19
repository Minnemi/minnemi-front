<template>
  <div>
    <form action="" class="form">
      <header>
        <strong>Escreva sua carta para o futuro</strong>

        <TextInput
          class="form-title-input"
          v-model="titleText"
          :attributes="{ placeholder: 'Titulo' }"
        />
      </header>
      <div class="form-grid">
        <TextArea :attributes="{ placeholder: 'Descrição' }" />

        <footer class="form-footer">
          <div>
            <strong>Desejo Receber Em</strong>
          </div>

          <div class="form-footer-buttons">
            <SelectComponent @change="handleSelectYearChange" />
            <div>
              <ButtonComponent class="form-footer-button" styles="outline"
                >Salvar</ButtonComponent
              >
              <ButtonComponent class="form-footer-button" styles="fill"
                >Enviar</ButtonComponent
              >
            </div>
          </div>
        </footer>
      </div>
      <div class="letter-tools">
        <TextInput label="Fonte" :attributes="{ type: 'select' }" />

        <TextInput label="Tamanho" :attributes="{ type: 'number' }" />

        <div class="letter-tools-grid">
          <ButtonComponent styles="simples outline">
            <IconComponent color="white" :path="mdiFormatBold"> </IconComponent>
          </ButtonComponent>

          <ButtonComponent styles="outline">
            <IconComponent color="white" :path="mdiFormatItalic">
            </IconComponent>
          </ButtonComponent>

          <ButtonComponent styles="outline">
            <IconComponent color="white" :path="mdiFormatAlignJustify">
            </IconComponent>
          </ButtonComponent>

          <ButtonComponent styles="outline">
            <IconComponent color="white" :path="mdiFormatAlignLeft">
            </IconComponent>
          </ButtonComponent>

          <ButtonComponent styles="outline">
            <IconComponent color="white" :path="mdiFormatAlignCenter">
            </IconComponent>
          </ButtonComponent>

          <ButtonComponent styles="outline">
            <IconComponent color="white" :path="mdiFormatAlignRight">
            </IconComponent>
          </ButtonComponent>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import {
  mdiFormatBold,
  mdiFormatItalic,
  mdiFormatAlignCenter,
  mdiFormatAlignJustify,
  mdiFormatAlignLeft,
  mdiFormatAlignRight,
} from '@mdi/js';

import IconComponent from '@@utils/IconComponent.vue';

import TextInput from '@@forms/TextInput.vue';

import TextArea from '@@forms/ContentInput.vue';

import ButtonComponent from '@components/utils/ButtonComponent.vue';

import SelectComponent from './SelectYearComponent.vue';

import { ref } from 'vue';

const titleText = ref('');

function handleSelectYearChange(value) {
  console.log('chage', value);
}
</script>

<style lang="scss" scoped>
strong {
  font-size: 1.5rem;
}

.form {
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: flex-start;
  gap: 1.5rem;

  & header {
    grid-column: 1/-1;
  }
  &-title-input {
    max-width: 300px;
  }
  &-footer {
    margin-top: 1.4rem;

    strong {
      margin-bottom: 1rem;
    }
    & > :nth-child(1) {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    & > :nth-child(2) {
      display: flex;
      gap: 1rem;
    }

    &-buttons {
      display: flex;
      justify-content: space-between;

      & > :nth-child(2) {
        display: flex;

        gap: 1rem;
      }
    }
    &-button {
      min-width: 120px;
    }
  }
}

.letter-tools {
  &-grid {
    margin-top: 1rem;

    display: grid;
    gap: 0.7rem;
    grid-template-columns: repeat(3, 1fr);

    & > * {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>

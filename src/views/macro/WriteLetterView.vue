<template>
  <div>
    <strong>Escreva sua carta para o futuro</strong>

    <form action="" class="form">
      <div>
        <TextInput
          v-model="titleText"
          :attributes="{ placeholder: 'Titulo' }"
        />
        <TextArea :attributes="{ placeholder: 'Descrição' }" />

        <div class="form-footer">
          <div>
            <strong>Desejo Receber Em</strong>
            <SelectComponent />
          </div>

          <div>
            <ButtonComponent styles="outline">Salvar</ButtonComponent>
            <ButtonComponent styles="fill">Enviar</ButtonComponent>
          </div>
        </div>
      </div>
      <div>assssssssss</div>
    </form>
  </div>
</template>

<script setup>
import TextInput from '@@forms/TextInput.vue';
import TextArea from '@@forms/ContentInput.vue';

import ButtonComponent from '@components/utils/ButtonComponent.vue';
import SelectComponent from '@components/forms/SelectComponent.vue';

import { ref } from 'vue';

const titleText = ref('');
</script>

<style lang="scss" scoped>
strong {
  font-size: 1.5rem;
}

.form {
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: flex-start;

  &-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 1.4rem;

    & > :nth-child(1) {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    & > :nth-child(2) {
      display: flex;
      gap: 1rem;
    }
  }
}
</style>

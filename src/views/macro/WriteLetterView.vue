<template>
  <div>
    <form action="" class="form">
      <header>
        <strong>{{ $t('writeLetterPage.title') }}</strong>

        <TextInput
          class="form-title-input"
          v-model="titleText"
          :hiddenRequiredMark="true"
          :attributes="{
            ...attributes.letterTitle,
            placeholder: $t('writeLetterPage.placeholder.title'),
          }"
        />
      </header>

      <div class="form-content">
        <!--
          ! todo: criar os eventos do component TextArea
          ! [ ] validação
          ! [ ] formatação
         -->
        <TextArea
          :hiddenRequiredMark="true"
          :attributes="{
            ...attributes.letterContent,
            placeholder: $t('writeLetterPage.placeholder.content'),
          }"
        ></TextArea>

        <footer class="form-footer">
          <div>
            <strong>
              {{ $t('writeLetterPage.labels.selectDate.title') }}
            </strong>
          </div>

          <div class="form-footer-buttons">
            <SelectComponent @change="handleSelectYearChange" />
            <div>
              <ButtonComponent class="form-footer-button" styles="outline">
                {{ $t('writeLetterPage.labels.saveLetterButton') }}
              </ButtonComponent>
              <ButtonComponent type="submit" class="form-footer-button" styles="fill">
                {{ $t('writeLetterPage.labels.sendLetterButton') }}
              </ButtonComponent>
            </div>
          </div>
        </footer>
      </div>

      <div class="form-letter-tools">
        <SelectFontComponent :data="['Arial', 'Poppins']" label="Fonte" />

        <TextInput
          :label="$t('writeLetterPage.labels.fontSize')"
          :hiddenRequiredMark="true"
          :attributes="attributes.fontSize"
        />

        <div class="letter-tools-grid">
          <ButtonComponent styles="outline">
            <template #start>
              <IconComponent class="letter-tools-icon" :path="mdiFormatBold">
              </IconComponent>
            </template>
          </ButtonComponent>

          <ButtonComponent styles="outline">
            <template #start>
              <IconComponent class="letter-tools-icon" :path="mdiFormatItalic">
              </IconComponent>
            </template>
          </ButtonComponent>

          <ButtonComponent styles="outline">
            <template #start>
              <IconComponent :path="mdiFormatAlignJustify"> </IconComponent>
            </template>
          </ButtonComponent>

          <ButtonComponent styles="outline">
            <template #start>
              <IconComponent
                class="letter-tools-icon"
                :path="mdiFormatAlignLeft"
              >
              </IconComponent>
            </template>
          </ButtonComponent>

          <ButtonComponent styles="outline">
            <template #start>
              <IconComponent
                class="letter-tools-icon"
                :path="mdiFormatAlignCenter"
              >
              </IconComponent>
            </template>
          </ButtonComponent>

          <ButtonComponent styles="outline">
            <template #start>
              <IconComponent
                class="letter-tools-icon"
                :path="mdiFormatAlignRight"
              >
              </IconComponent>
            </template>
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
import SelectComponent from './components/SelectYearComponent.vue';
import SelectFontComponent from '@components/forms/SelectComponent.vue';
import { ref, onMounted } from 'vue';
import attributes from '@@shared/formFieldsAttributes';
import wave from '@@lib/wave';

const titleText = ref('');

function handleSelectYearChange(value) {
  console.log('change', value);
}

onMounted(() => {
  new wave(true);
});
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
      font-size: 1.1rem;
    }
    & > :nth-child(1) {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    & > :nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    &-buttons {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      & > :nth-child(2) {
        display: flex;

        gap: 1rem;
      }
    }
    &-button {
      min-width: 120px;
      height: 47px;
    }
  }

  &-letter-tools {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .letter-tools-grid {
      & * {
        color: var(--text-principal);
      }

      display: grid;
      gap: 0.7rem;
      grid-template-columns: repeat(3, 1fr);

      & > * {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &-icon {
      justify-self: center;
    }
  }
}

@media (max-width: 900px) {
  .form {
    grid-template-columns: 1fr;

    header {
      order: 1;
    }

    &-content {
      order: 3;
    }
    &-letter-tools {
      order: 2;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .letter-tools-grid {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }
    }
  }
}
@media (max-width: 380px) {
  .form-footer-buttons {
    & > * {
      min-width: 100%;
    }
    & > :nth-child(2) {
      flex-wrap: wrap;
      * {
        min-width: 100%;
      }
    }
  }
}
</style>

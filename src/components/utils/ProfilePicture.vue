<template>
  <figure class="figure" :class="mode" data-editable-content="Alterar">
    <img
      :alt="'Foto de perfil do usuário ' + username"
      :src="src"
      class="image"
      :onerror="handleLoadError"
    />
  </figure>
</template>

<script setup>
defineProps({
  src: String,
  username: {
    type: String,
    default: 'anônimo',
  },
  mode: {
    type: String,
    default: 'normal',
  },
});

function handleLoadError() {
  this.style.display = 'none';
}
</script>

<style scoped lang="scss">
.figure {
  --size: 46px;
  position: relative;
  display: flex;
  width: var(--size);
  height: var(--size);
  color: var(--border-color);
  border: 2px solid var(--border-color);
  border-radius: 50%;
  overflow: hidden;
  background: var(--default-user-picture) var(--elements-background-color)
    no-repeat;
  background-size: cover;
  transition: width 0.2s, height 0.2s;

  img {
    object-fit: cover;
  }
}

.large {
  --size: 60px;
}
.extra-large {
  --size: 120px;
}
.editable {
  --size: 100px;
  --gradient-bf: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.7) 50%
  );
  --gradient-af: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 35%,
    rgba(0, 0, 0, 0.75) 55%,
    rgba(0, 0, 0, 1) 100%
  );
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0.75rem;
    color: var(--gray-100);
    transition: top 0.2s;
  }

  &::before {
    top: 100%;
    background-image: var(--gradient-bf);
  }

  &::after {
    content: attr(data-editable-content);
    background-image: var(--gradient-af);
  }

  &:hover::before {
    top: 0;
  }
}

.image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: var(--size);
  height: var(--size);
}
</style>

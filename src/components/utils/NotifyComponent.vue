<template>
  <section class="container">
    <div class="box">
      <h1 class="title">
        <slot name="title"></slot>
      </h1>
      <p class="message">
        <slot name="message"></slot>
      </p>
      <p class="extra">
        <slot name="extra"></slot>
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1050;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .7);
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;
  max-width: 95%;
  width: 500px;
  color: var(--text-principal);
  border-radius: 12px;
  border: 2px solid var(--border-color);
  background-color: var(--elements-background-color);

  animation: g-show-expand .2s both normal;
  animation: g-show-opacity .3s both normal;
}
</style>

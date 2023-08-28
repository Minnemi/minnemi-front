<template>
  <footer class="footer">
    <ul>
      <li>{{ $t('appLayout.footer.legal.use') }}</li>
      <li>{{ $t('appLayout.footer.legal.privacy') }}</li>
      <li>Minnemi &copy;</li>
    </ul>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  padding: 1rem;
  ul {
    width: max-content;
    margin-left: auto;
    list-style-type: none;

    display: flex;
    gap: 1.8rem;
  }
  li {
    position: relative;

    color: var(--footer-text-color);
  }

  li:not(:nth-last-child(1))::after {
    content: '';

    position: absolute;

    right: -1.1rem;
    top: 50%;
    transform: translateY(-50%);

    width: 6px;
    height: 6px;

    border-radius: 50%;

    background-color: var(--footer-text-color);
  }
}
</style>

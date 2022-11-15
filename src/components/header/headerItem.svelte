<script>
  export let num, href, name;
</script>

<li class="navigation__item navigation__item--{num}">
  <a {href} class="navigation__link">{name}</a>
</li>

<style lang="scss">
  .navigation {
    &__item {
      text-align: center;

      &--1 {
        grid-column: 2 / 3;
      }
    }

    &__link:link,
    &__link:visited {
      font-size: 1.4rem;
      color: var(--color-black);
      text-decoration: none;
      // font-family: $font-display;
      text-transform: uppercase;
      text-align: center;
      padding: 1.5rem;
      display: block;

      transition: all 0.2s;
    }

    &__link:hover,
    &__link:active {
      background-color: rgba(#000, 0.05);
      transform: translateY(-3px);
    }
  }
</style>

<script>
  export let title, href, svgUrlFront, svgUrlBack;
</script>

<li class="sidebar__item">
  <a {href} class="sidebar__link">
    <div class="sidebar__label">
      <p class="sidebar__text">{title}</p>
    </div>
    <div class="sidebar__icon-container">
      <svg class="sidebar__icon sidebar__icon--front">
        <use xlink:href={svgUrlFront} />
      </svg>
      <svg class="sidebar__icon sidebar__icon--back">
        <use xlink:href={svgUrlBack} />
      </svg>
    </div>
  </a>
</li>

<style lang="postcss">
  $tag: .sidebar;
  
  $(tag) {
    & $(tag)__item {
      text-align: center;
      position: relative;
    }

    & $(tag)__link:link,
    & $(tag)__link:visited {
      font-size: 1.4rem;
      color: var(--color-black);
      text-decoration: none;
       /* font-family: $font-display; */
      text-transform: uppercase;
      text-align: center;
      padding: 1.5rem;
      display: block;

      transition: all 0.2s;
      clip-path: polygon(0 0, 200% 0, 200% 100%, 0 100%);
    }

    & $(tag)__link:hover,
    & $(tag)__link:active {
      background-color: var(--color-sidebar-active);
    }

    & $(tag)__link:hover > & $(tag)__icon-container,
    & $(tag)__link:active > & $(tag)__icon-container {
      margin-left: -10px;
    }

    & $(tag)__link:hover & $(tag)__label,
    & $(tag)__link:active & $(tag)__label {
      transform: rotateZ(0);
    }

    & $(tag)__icon {
      width: 3rem;
      height: 3rem;
/* 
      &--front {
        Make front like flip cards
      } */

      /* &--back {
        Same as front but referse
        display: none;
      } */
    }
  }

  $(tag)__label {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      top: 0;
      left: 25%;
      transform-origin: 0% 100%;
      transform: rotateZ(90deg);
      background-color: var(--color-sidebar-active);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-radius: 0 25% 25% 0;
      transition: all 0.2s;
    }

    $(tag)__text {
      margin-right: 1rem;
    }
</style>

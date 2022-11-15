<script>
  import { createEventDispatcher } from "svelte";
  import { fade, slide } from "svelte/transition";

  const dispatch = createEventDispatcher();
  export let type, name;
  let svgPath = "/svg/logos.svg#";
  let imgPath = "/img/";
  let formatedTitles = {
    handlebars: "Handlebars JS Templating",
  };
  let defaultTitle = "A Great Technology";

  const closeModal = () => dispatch("closeModal");
</script>

<div class="modal" in:slide={{ duration: 800 }} out:fade>
  <span
    class="modal__close"
    in:fade={{ delay: 800, duration: 150 }}
    on:click={closeModal}
    on:keydown
  />
  <!-- <h1 class="modal__title">{formatedTitles[name] || defaultTitle}</h1> -->
  {#if name === "handlebars"}
    <div class="modal__title-icon">
      <svg class="modal__title-svg modal__title-svg--{name}">
        <use xlink:href={`${svgPath}handlebars`} />
      </svg>
    </div>
    <div class="modal__image">
      <img
        src={`${imgPath}showcase-handlebars.png`}
        alt="Handlebars Showcase"
        class="modal__img modal__img--handlebars"
      />
    </div>
  {:else if name === "mssql"}
    <div class="modal__title-icon">
      <svg class="modal__title-svg modal__title-svg--{name}">
        <use xlink:href={`${svgPath}mssql`} />
      </svg>
    </div>
    <div class="modal__image">
      <img
        src={`${imgPath}showcase-tsql.png`}
        alt="Handlebars Showcase"
        class="modal__img modal__img--mssql"
      />
    </div>
  {:else if name === "postman"}
    <div class="modal__title-icon">
      <svg class="modal__title-svg modal__title-svg--{name}">
        <use xlink:href={`${svgPath}postman`} />
      </svg>
    </div>
    <div class="modal__image">
      <img
        src={`${imgPath}showcase-postman.png`}
        alt="Handlebars Showcase"
        class="modal__img modal__img--postman"
      />
    </div>
  {:else if name === "mongodb"}
    <div class="modal__title-icon">
      <svg class="modal__title-svg modal__title-svg--{name}">
        <use xlink:href={`${svgPath}mongodb`} />
      </svg>
    </div>
  {:else if name === "bigcommerce"}
    <div class="modal__title-icon">
      <svg class="modal__title-svg modal__title-svg--{name}">
        <use xlink:href={`${svgPath}bigcommerce`} />
      </svg>
    </div>
    <div class="modal__image">
      <img
        src={`${imgPath}showcase-bigcommerce.png`}
        alt="Handlebars Showcase"
        class="modal__img modal__img--bigcommerce"
      />
    </div>
  {:else if name === "mapbox"}
    <div class="modal__title-icon">
      <svg class="modal__title-svg modal__title-svg--{name}">
        <use xlink:href={`${svgPath}mapbox`} />
      </svg>
    </div>
    <div class="modal__image">
      <img
        src={`${imgPath}showcase-mapbox.png`}
        alt="Handlebars Showcase"
        class="modal__img modal__img--mapbox"
      />
    </div>
  {:else if name === "sass"}
    <div class="modal__title-icon">
      <svg class="modal__title-svg modal__title-svg--{name}">
        <use xlink:href={`${svgPath}sass`} />
      </svg>
    </div>
    <div class="modal__image">
      <img
        src={`${imgPath}showcase-sass-1.png`}
        alt="Handlebars Showcase"
        class="modal__img modal__img--sass"
      />
    </div>
  {:else if name === "svelte"}
    <div class="modal__title-icon">
      <svg class="modal__title-svg modal__title-svg--{name}">
        <use xlink:href={`${svgPath}svelte`} />
      </svg>
    </div>
    <div class="modal__image">
      <img
        src={`${imgPath}showcase-svelte.png`}
        alt="Handlebars Showcase"
        class="modal__img modal__img--svelte"
      />
    </div>
  {:else if name === "react"}
    <div class="modal__title-icon">
      <svg class="modal__title-svg modal__title-svg--{name}">
        <use xlink:href={`${svgPath}react`} />
      </svg>
    </div>
    <div class="modal__image">
      <img
        src={`${imgPath}showcase-react-1.png`}
        alt="Handlebars Showcase"
        class="modal__img modal__img--react-1"
      />
    </div>
    <div class="modal__image">
      <img
        src={`${imgPath}showcase-react-2.png`}
        alt="Handlebars Showcase"
        class="modal__img modal__img--react-2"
      />
    </div>
  {:else if name === "css"}
    <div class="modal__title-icon">
      <svg class="modal__title-svg modal__title-svg--{name}">
        <use xlink:href={`${svgPath}css`} />
      </svg>
    </div>
    <div class="modal__image">
      <img
        src={`${imgPath}showcase-css.png`}
        alt="Handlebars Showcase"
        class="modal__img modal__img--css"
      />
    </div>
  {:else}
    <p>{name}</p>
  {/if}
</div>

<style lang="scss">
  $crad: 10px;

  .modal {
    z-index: 2005;
    width: 60vw;
    height: 50vh;
    position: fixed;
    padding-left: 3rem;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: $crad;

    &__title {
      width: 100%;
      background-color: hsla(20, 10%, 90%, 0.8);
      font-size: 3rem;

      border-radius: $crad $crad 0 0;
    }

    &__title-svg {
      max-width: 20rem;
    }

    &__image {
      max-width: 20rem;
    }

    &__img {
      width: 100%;
    }

    &__close {
      background-color: aquamarine;
      width: 7rem;
      height: 7rem;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(25%, -25%);
      border-radius: 50%;

      &::before,
      &::after {
        content: "";
        display: block;
        background-color: #000;
        width: 4.25rem;
        height: 0.35rem;
        position: absolute;
        top: 50%;
        left: 50%;
      }

      &::before {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
</style>

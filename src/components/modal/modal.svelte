<script>
    import modalData from "../../stores.js";
    import { fade } from "svelte/transition";

    let bodyComponent, visible = false;

    modalData.subscribe((payload) => {
        if (!payload.bodyComponent)
         return;
        ({bodyComponent} = payload);
        visible = true;
    });
  

    const closeModal = () => {visible = false;};

  </script>
  
  <div
    class="modal__background"
    style:--opacity={visible ? 0.25 : 0}
    style:--events={visible ? "all" : "none"}
    on:click={closeModal} on:keydown
  />
  
  {#if visible}
    <svelte:component this={bodyComponent}>
          <span
            class="modal__close"
            slot="closeButton"
            in:fade={{ delay: 800, duration: 150 }}
            on:click={closeModal}
            on:keydown
            />
          </svelte:component>
  {/if}
  
  <style lang="postcss">  
    .modal__background {
        z-index: 2000;
        position: fixed;
        min-width: 100vw;
        min-height: 100vh;
        top: 0;
        left: 0;
        background-color: #000;
        transition: all 0.2s;

        opacity: var(--opacity);
        pointer-events: var(--events);
      }
  </style>
  
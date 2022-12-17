<script>
    import { modalData, formResponse, isFormsDisabled } from '$stores';
    import { fade } from "svelte/transition";

    let name, bodyComponent, visible = false;

    modalData.subscribe((payload) => {
        if (!payload.bodyComponent)
         return;
        ({name, bodyComponent} = payload);
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
  <div class="modal__body" 
    in:fade={{ duration: 150 }} 
    out:fade={{ duration: 150 }}
    on:click={name==='contact' && $isFormsDisabled ? closeModal : null}>
    <svelte:component this={bodyComponent}/>
      <span
      class={`modal__close ${name==='contact' && $isFormsDisabled ? ' modal__close--form' : ''}`}
      on:click={closeModal}
      on:keydown
      />
  </div>  
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


    .modal__body {
        z-index: 2005;
        width: 60vw;
        position: fixed;
        top: 50vh;
        left: 50vw;
        transform: translate(-50%, -50%);
        background-color: transparent;

        & > :global(:first-child),
        & > :global(:first-child::before){
          border-radius: 20px;
          overflow: hidden;
        }


        @media(--viewport-phone){
          width: 90%;
        }
      }

    $translate: translate(25%, -25%);

    .modal__close {
        background-color: var(--color-primary);
        width: 7rem;
        height: 7rem;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: $translate;
        border-radius: 50%;

        &::before,
        &::after {
          content: '';
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

    .modal__close--form{
      transform: scale(1);
      animation: pulse infinite 1.5s;
    }

    @keyframes pulse{
      0%, 100% {
        transform: $translate scale(0.95);
      }

      50% {
        transform: $translate scale(1.05);
      }
    }
  </style>
  
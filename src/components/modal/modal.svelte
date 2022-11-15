<script>
  import modalData from "../../stores.js";
  import ModalBody from "./modalBody.svelte";

  let name,
    type,
    visible = false;
  modalData.subscribe((payload) => {
    if (!payload.name) return;
    console.log(payload);
    ({ name, type } = payload);
    visible = true;
  });

  const closeModal = () => (visible = false);
</script>

<div
  class="modal__background"
  style={`opacity:${visible ? 0.25 : 0};pointer-events:${
    visible ? "all" : "none"
  }`}
  on:click={closeModal}
/>

{#if visible}
  <ModalBody {name} {type} on:closeModal={closeModal} />
{/if}

<style lang="scss">
  .modal {
    z-index: 2001;
    &__background {
      z-index: 2000;
      position: fixed;
      min-width: 100vw;
      min-height: 100vh;
      top: 0;
      left: 0;
      background-color: #000;
      transition: all 0.2s;
    }
  }
</style>

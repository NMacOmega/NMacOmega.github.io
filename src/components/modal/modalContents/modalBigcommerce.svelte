<script>
     import { fade, slide } from "svelte/transition";
     import '@postcss/components/modal.css';
</script>



<div class="modal" in:slide={{ duration: 800 }} out:fade>
    <slot name="closeButton"/>
      <div class="modal__title-icon">
        Hello There
      </div>
      <div class="modal__image">
        This Content is under construction
      </div>

</div>

<style lang="postcss">

    :global(.modal__close){
        background-color: red;
    }
</style>
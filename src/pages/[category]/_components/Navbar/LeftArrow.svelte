<script>
  import { marqueeHandlerStore } from "../../_stores/marqueeHandlerStore";

  export let tl;
  function getNavPlacement() {}
</script>

<svg
  on:click={getNavPlacement}
  class:page-content={$marqueeHandlerStore.page}
  class="close-main"
  xmlns="http://www.w3.org/2000/svg"
  height="24px"
  viewBox="0 0 24 24"
  width="24px"
  fill="white"
  ><path d="M0 0h24v24H0V0z" fill="none" /><path
    d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
  /></svg
>

<style>
  .close-main {
    display: block;
    cursor: pointer;

    position: absolute;

    height: 20px;
    width: 20px;
    left: 30px;
  }
  .page-content {
    right: 30px;
    left: auto;
  }
</style>

<script>
  import { createEventDispatcher } from "svelte";
  import LeftArrow from "./LeftArrow.svelte";

  const dispatch = createEventDispatcher();
</script>

<div class="top-nav-container">
  <div
    on:click={(e) => {
      e.stopImmediatePropagation();
      dispatch("closePageContent");
    }}
    class="logo-container"
  >
    <img
      src={"https://res.cloudinary.com/dt4xntymn/image/upload/v1638227177/mainSite/home/logo_yd4luk.png"}
      alt=""
    />
  </div>

  <LeftArrow />
</div>

<style lang="scss">
  .top-nav-container {
    width: 100%;
    background-color: rgb(111, 63, 138);

    padding: 10px;

    display: flex;

    justify-content: center;
    align-items: center;
    position: relative;
    .logo-container {
      cursor: pointer;
      width: 120px;

      position: relative;
      pointer-events: all;
      z-index: 5;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>

<script>
  import { transition } from "../../crossfade";
  import GalleryModal from "../_components/GalleryModal/GalleryModal.svelte";
  import { galleryModal } from "../_components/GalleryModal/store";
  import Navbar from "./_components/Navbar/Navbar.svelte";
  import { marqueeHandlerStore } from "./_stores/marqueeHandlerStore";

  const { receive, send } = $transition;
</script>

<div class="wrapper">
  <Navbar />
  <div
    in:receive|local={{ key: $marqueeHandlerStore.category }}
    out:send|local={{ key: $marqueeHandlerStore.category }}
    class="main-anim-wrapper"
  >
    <div class="page-transition-black" />

    <slot />
    {#if $galleryModal.visible}
      <GalleryModal />
    {/if}
  </div>
</div>

<style lang="scss">
  .wrapper {
    position: fixed;
    top: 0;
    z-index: 3;
    background-image: url("https://res.cloudinary.com/dt4xntymn/image/upload/v1637997281/mainSite/Background_Photo_ojnwmx.jpg");
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
  }
  .main-anim-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
  }

  .container {
    height: 100%;
    margin: 0;
    width: 100%;
    --color-text: #111;
    --color-bg: white;
    --color-link: #000;
    --color-link-hover: #000;
    --color-border: #a7927b;
    --marquee-bg: #000;
    --marquee-text: #fff;
    --menu-focus: #775e41;
    z-index: 6;
    position: relative;
    display: flex;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .menu-wrap {
    font-family: reason-new, -apple-system, BlinkMacSystemFont, Segoe UI,
      Helvetica, Arial, sans-serif;
    display: flex;
    background-size: cover;
    z-index: 12;
    flex-direction: column;
    width: 100vw;
    position: relative;
    justify-content: center;
  }
  .page-transition-black {
    background-color: black;
    width: 100vw;

    position: absolute;
    bottom: 0;
    height: 0vh;
    z-index: 25;
  }
</style>

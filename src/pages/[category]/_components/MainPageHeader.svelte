<script>
import { params } from "@roxi/routify";

  import { onMount } from "svelte";
import { pageLayoutMaster } from "../../../pageLayout";
  import { marqueeHandlerStore } from "../_stores/marqueeHandlerStore";

  marqueeHandlerStore;

  const hideNav = new Set(["maliview", "aviator"]);
</script>

<h5
  class:inactive={hideNav.has($marqueeHandlerStore.page)}
  class:press={$marqueeHandlerStore.page === "press"}
  class:sm={$marqueeHandlerStore.page === "meet the team"}
  class="main-text-header"
>
  {pageLayoutMaster['pages']['byTitle'][$params.pages].title}
</h5>

<style lang="scss">
  .press {
    position: absolute;
  }
  .main-text-header {
    font-size: 6em;
    line-height: 0.8em;
    font-weight: 900;
    letter-spacing: 3px;

    white-space: nowrap;
    font-family: unisansB;
    text-align: center;
    background-color: transparent;
    top: 5vh;
    right: 0;
    left: 0;
    z-index: 10;

    padding: 20px;
    color: #68208e;
    text-transform: uppercase;
    @media screen and (max-width: 820px) {
      font-size: 10vw;
    }
  }
  .sm {
    font-size: 3em;
  }
  .inactive {
    display: none;
  }
</style>

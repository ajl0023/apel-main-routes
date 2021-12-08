<!-- routify:options index=0 -->
<script>
  import { params } from "@roxi/routify";
  import { pageLayoutMaster } from "../../../pageLayout";
  import MainPageHeader from "../_components/MainPageHeader.svelte";
  import { marqueeHandlerStore } from "../_stores/marqueeHandlerStore";

  function customTransition() {
    return {
      duration: 2000,
      css: (t, u) => {
        return `transform: translateY(${100 * u}vh);`;
      },
    };
  }
  let Component;
  const loadComponent = async (title) => {
    marqueeHandlerStore.setPage(title);
    let comp = pageLayoutMaster["pages"]["byTitle"][title].component;
    Component = (await import(`./_components/${comp}.svelte`)).default;
  };
  $: page = $params.pages;
  $: loadComponent(page);
</script>

<div
  transition:customTransition|local
  on:introend={() => {
    $marqueeHandlerStore.shouldLoadImages = true;
  }}
  class="page-content-container page-content-container-anim"
>
  <MainPageHeader />
  <div class="page-container">
    <svelte:component this={Component} />
  </div>
</div>

<style lang="scss">
  .page-content-container {
    width: 100%;

    z-index: 3;
    height: 100%;

    top: 0;

    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 900px) {
      font-size: 0.8rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 0.6rem;
    }
  }
  .main-page-container {
    overflow: auto;
    width: 100vw;
    height: 100%;
  }
  .meetPage {
    overflow: unset;
  }
  .press {
    overflow: hidden;
  }
  .page-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
</style>

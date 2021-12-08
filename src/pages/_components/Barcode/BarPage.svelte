<script>
  import { context, goto } from "@roxi/routify";
  import { pageLayoutMaster } from "../../../pageLayout";
  import { marqueeHandlerStore } from "../../[category]/_stores/marqueeHandlerStore";

  import Target from "../Target.svelte";

  let marquee;
  const positions = {};
  const barInfo = pageLayoutMaster["categories"]["byTitle"][$$props.title];

  let label;
  $: hide =
    $context.child &&
    $context.child.param &&
    $context.child.param.category == barInfo.urlFormatted;
  $: console.log($context);
</script>

<div
  on:click={async (e) => {
    marqueeHandlerStore.setCategory(barInfo.title);
    $goto(`./${barInfo.urlFormatted}`);
  }}
  class="bar bar-wrapper "
>
  <Target key={barInfo.title} {hide} />
  <div class="inner-bar">
    <div class="target-{barInfo.index} target-cover" />
    <div bind:this={label} class="main-label-container">
      <p>{barInfo.title}</p>
    </div>
  </div>
  <div
    on:click={(e) => {
      e.stopPropagation();
    }}
    class="mobile-container"
  >
    <div class="mobile-bar-container" />
    <div class="label-container">
      <p>{barInfo.title}</p>
    </div>
  </div>
</div>

<style lang="scss">
  .target-cover {
    width: 100%;
    height: 100%;
    background-color: white;
  }
  .mobile-container {
    display: none;
    @media screen and (max-width: 650px) {
      display: flex;
      height: 100%;
      width: 100%;
      .mobile-bar-container {
        height: 100%;
        width: 100%;
        position: relative;
        opacity: 1;
        background-color: white;
      }
      .label-container {
        opacity: 1;
        position: relative;
        color: white;
        font-family: unisansB;
        writing-mode: vertical-rl;
        text-orientation: sideways;
        top: auto !important;
        p {
          font-size: 20px;
        }
      }
    }
  }
  .bar-wrapper {
    height: 100%;
    width: 100%;
    cursor: pointer;
    pointer-events: none;
    @media screen and (max-width: 650px) {
      pointer-events: auto;
    }
  }
  .inner-bar {
    width: 100%;
    height: 100%;
    @media screen and (max-width: 650px) {
      display: none;
    }
  }
  .main-label-container {
    text-transform: uppercase;
    position: absolute;
    opacity: 1;
    left: 0;
    text-align: left;
    color: white;
    top: 0;
    color: white;
    font-family: unisansB;
    writing-mode: vertical-rl;
    pointer-events: none;
    text-orientation: sideways;
    p {
      font-size: 2vw;
    }
  }
  .wrapper {
    width: 100%;
    height: 100%;
  }
</style>

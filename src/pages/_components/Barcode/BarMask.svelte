<script>
  import { onMount } from "svelte";
  import { introAnimationStore } from "../../../introAnimationStore";
  import { pageLayoutMaster } from "../../../pageLayout";
  let bar;
  let video;
  const barInfo = pageLayoutMaster["categories"]["byTitle"][$$props.title];
  onMount(() => {
    const ele = document.querySelector(`.target-${barInfo.index}`);
    introAnimationStore.update((s) => {
      s.bars = [
        ...s.bars,
        {
          ele: bar,
          parentEle: ele,
          index: barInfo.index,
          video: video,
        },
      ];
      return s;
    });
  });
</script>

<div bind:this={bar} class="aspect-ratio-container  container-{barInfo.index}">
  <div class="aspect-ratio" />
  <div style="" class="target-bar container">
    <video muted bind:this={video} class="cover-video" src={barInfo.video} />
  </div>
</div>

<style lang="scss">
  .aspect-ratio {
    padding-top: 225%;
  }
  .aspect-ratio-container {
    width: 15%;
    position: fixed;
    bottom: 50%;
    transform: translateY(50%);
    pointer-events: none;
  }
  .container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    @media screen and (max-width: 650px) {
      display: none;
    }
  }
  .container-0 {
    left: 10%;
  }
  .container-1 {
    left: 30%;
  }
  .container-2 {
    right: 30%;
  }
  .container-3 {
    right: 10%;
  }
  .cover-video {
    height: 100%;
    &::-webkit-media-controls-panel {
      display: none !important;
      -webkit-appearance: none;
    }
    object-position: center center;
    width: 100%;
    object-fit: cover;
  }
</style>

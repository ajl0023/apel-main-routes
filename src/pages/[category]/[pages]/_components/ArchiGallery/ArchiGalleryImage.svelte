<script>
  import gsap from "gsap";

  import { onMount } from "svelte";
  import { lazy } from "../../../../../helpers/lazy";
  import { galleryModal } from "../../../../_components/GalleryModal/store";
  import { marqueeHandlerStore } from "../../../_stores/marqueeHandlerStore";
  export let img;

  let imageEle;

  export let url;
  export let content;

  $: {
    if (img) {
      if ($marqueeHandlerStore.shouldLoadImages) {
        gsap.to(imageEle, {
          opacity: 1,
        });
      } else if (!$marqueeHandlerStore.shouldLoadImages) {
      }
    }
  }
</script>

<li class="mdc-image-list__item">
  <img
    width={img.width}
    height={img.height}
    class="mdc-image-list__image"
    src={img.url}
    alt=""
    on:click={() => {
      galleryModal.openModal(img, $marqueeHandlerStore.page);
    }}
  />
  <div class="mdc-image-list__supporting">
    <span class="mdc-image-list__label label">{img.label}</span>
  </div>
</li>

<style lang="scss">
  .label {
    text-align: left;
    font-size: 1.3em;
    line-height: 0.8em;

    letter-spacing: 3px;
    font-family: "Roboto Mono", monospace;
    font-weight: 600;

    color: #68208e;
    text-transform: uppercase;
  }
</style>

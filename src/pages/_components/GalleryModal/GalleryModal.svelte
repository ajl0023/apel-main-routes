<script>
  import { galleryModal } from "./store.js";
  const images = $galleryModal.images;
</script>

<div
  on:click={() => {
    galleryModal.closeModal();
  }}
  class="modal-container"
>
  <div
    on:click={() => {
      galleryModal.closeModal();
    }}
    class="close-x close-main"
  />
  {#if images && images.length > 1}
    <div class="gallery-container-flex">
      {#each images as img}
        <div class="image-container">
          <img
            on:click={(e) => {
              e.stopImmediatePropagation();
            }}
            height={img.height}
            width={img.width}
            loading="lazy"
            class="gallery-img"
            src={img.url}
            alt=""
          />
        </div>
      {/each}
    </div>
  {:else}
    <div class="single-image-container image-container">
      <img
        on:click={(e) => {
          e.stopImmediatePropagation();
        }}
        height={$galleryModal.selected.height}
        width={$galleryModal.selected.width}
        loading="lazy"
        class="gallery-img"
        src={$galleryModal.selected.url}
        alt=""
      />
    </div>
  {/if}
</div>

<style lang="scss">
  .modal-container {
    z-index: 10;
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
    top: 0;

    padding: 20px;
    right: 0;
    background-color: white;
  }
  .gallery-container-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    width: 100%;
  }

  .image-container {
    max-width: 700px;
    width: 100%;
    .gallery-img {
      width: 100%;
      object-fit: cover;
      height: auto;
      object-position: center center;
    }
  }
  .single-image-container {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    width: fit-content;
    height: fit-content;
    top: 0;
    margin: auto;

    .gallery-img {
      object-fit: cover;
      max-width: 40vw;
      max-height: 70vh;
    }
  }
</style>

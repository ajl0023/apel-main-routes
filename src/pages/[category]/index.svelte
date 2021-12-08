<!-- routify:options param-is-page=true -->
<script>
  import { params } from "@roxi/routify";
  import gsap from "gsap";
  import { tick } from "svelte";
  import { pageLayoutMaster } from "../../pageLayout";
  import MarqueeItem from "./_components/MarqueeItem.svelte";

  let categoryDetails =
    pageLayoutMaster["categories"]["byTitle"][$params.category];

  const pagesArr = categoryDetails.pages.map((page) => {
    return pageLayoutMaster["pages"]["byTitle"][page.key];
  });

  async function customTransition(node, params) {
    await tick();

    gsap.set(".marquee-animation-container", { y: "0vh" });

    const anim = gsap
      .timeline({
        paused: true,
      })
      .to(".marquee-animation-container", {
        y: "100vh",
      })
      .to(".page-transition-black", {
        height: "100vh",
        duration: "1.2",
        ease: "power3.out",
        onComplete: () => {},
      })

      .to(".page-transition-black", {
        height: "0vh",
        duration: "1.2",
        ease: "power3.out",
        onComplete: () => {},
      });

    if (params.reversed) {
      anim.progress(1).reverse();
    } else {
      anim.play();
    }
    return {
      duration: anim.duration() * 1000,
    };
  }
</script>

<div
  out:customTransition|local={{ reversed: false }}
  in:customTransition|local={{ reversed: true }}
  class="marquee-animation-container page-wrapper"
>
  <div class="container flex-item">
    <div class="menu-wrap">
      {#each pagesArr as menuItem}
        {#if menuItem}
          <MarqueeItem {menuItem} />
        {/if}
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .page-wrapper {
    width: 100%;

    position: relative;
  }
  .page-content-container {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    transform: translate(0%, 100%);
    z-index: 20;
    position: absolute;
    width: 100vw;
    height: 100%;
  }
  .page-transition-black {
    background-color: black;
    width: 100vw;
    position: absolute;
    bottom: 0;
    height: 0vh;
    z-index: 25;
  }

  .container {
    height: 100%;

    position: relative;

    display: flex;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .menu-wrap {
    width: 100%;
    height: 100%;
  }
</style>

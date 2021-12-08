<script>
  import { goto, Router } from "@roxi/routify";
  import { onMount } from "svelte";
  import { routes } from "../.routify/routes";
  import "./global.scss";

  onMount(() => {
    if (!document.lazyLoadInstance) {
      document.lazyLoadInstance = new LazyLoad();
    }
  });
</script>

<Router {routes} />

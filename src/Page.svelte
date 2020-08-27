<script>
    import router from "./web_modules/page.js";
    import Home from "./routes/Home.svelte";
    import Comment from "./routes/Comment.svelte";

//import { defineCustomElements } from '@se/web-ui/loader';
//defineCustomElements(window);

    export let foo;

    let page;
    let params;

    router("/", () => page = Comment);
    router("/:name", (ctx, next) => {
        params = ctx.params;
        next()
    }, () => page = Comment);

    router.start();

    console.log(foo);
</script>

<svelte:component this={page} params={params}/>

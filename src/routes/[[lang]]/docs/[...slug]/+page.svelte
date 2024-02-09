<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { page } from '$app/stores'
    
    console.log($page.params.slug);
    const slugArr = $page.params.slug.split('/');
    console.log(slugArr);
    const { lang } = $page.params;
</script>

{#if lang === 'ko'}
    <h1>안녕</h1>
    {:else if lang === 'en'}
    <h1>hello</h1>
    {:else}
    <h1>zzz</h1>
{/if}

<h1>Docs 페이지</h1>

{#if slugArr.length === 1}
    <h1>주제 {slugArr[0]}</h1>
{:else if slugArr.length === 2}
    <h1>주제 {slugArr[0]} 주제별 항목 {slugArr[1]}</h1>
{/if}


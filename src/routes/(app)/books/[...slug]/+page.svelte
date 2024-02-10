<script>
    import { page } from '$app/stores'
    
    console.log($page.params.slug);
    const slugArr = $page.params.slug.split('/');
    console.log(slugArr);

</script>


<h1>Docs 페이지</h1>

{#if slugArr.length === 1}
    <h1>주제 {slugArr[0]}</h1>
{:else if slugArr.length === 2}
    <h1>주제 {slugArr[0]} 주제별 항목 {slugArr[1]}</h1>
{/if}


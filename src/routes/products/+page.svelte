<script>
    /** @type {import('./$types').PageData} */
    export let data; // data prop
    const products = data.products;
</script>

<h1>제품 리스트</h1>

<p></p>

{#each products as product}
<div>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
</div>
<hr />
{/each}
<script>
    export let data;
    const { product } = data;
</script>


<h1>제품상세페이지</h1>

<div>
    <h2>{product.title}</h2>
    <h3>가격: {product.price}</h3>
    <p>설명: {product.description}</p>
</div>
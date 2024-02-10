<script>
    export let electronicId = 100;
</script>

<h1>공사중...전자제품 리뷰</h1>


<ul>
    <a href="./electronics/1"><li>리뷰1</li></a>
    <a href="./electronics/2"><li>리뷰2</li></a>
    <a href="./electronics/3"><li>리뷰3</li></a>
    <a href="./electronics/4"><li>리뷰4</li></a>
    <a href="./electronics/5"><li>리뷰5</li></a>
    <a href="./electronics/6"><li>리뷰6</li></a>
    <a href={`./electronics/${electronicId}`}><li>리뷰{electronicId}</li></a>
</ul>
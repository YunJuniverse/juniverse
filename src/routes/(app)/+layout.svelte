<script>
    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<header class="layout-header">헤더 영역</header>

<slot/>

<footer class="layout-footer">푸터 영역</footer>

<style>
    .layout-header {
        background-color: blue;
        color: azure;
        font-size: 30px;
        text-align: center;
        padding: 10px;
    }
    .layout-footer {
        background-color: blue;
        color: azure;
        font-size: 30px;
        text-align: center;
        padding: 10px;
    }
</style>
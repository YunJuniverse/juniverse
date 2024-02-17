<script>
    import { page } from '$app/stores';
</script>

<h1>상품이 존재하지 않습니다</h1>

<h3>{$page.status} : {$page.error.message}</h3>
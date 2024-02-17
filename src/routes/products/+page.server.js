export const load = async (serverLoadEvent) => {
    console.log('Sever Load 함수 실행됨');
    const { fetch } = serverLoadEvent;
    const response = await fetch("http://localhost:4000/products");
    const products = await response.json();
    return {
        products
    };
};
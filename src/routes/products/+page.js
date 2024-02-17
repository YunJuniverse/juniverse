export const load = async (loadEvent) => {
    console.log('Load 함수 실행됨');
    const { fetch } = loadEvent;
    const response = await fetch("http://localhost:4000/products");
    const products = await response.json();
    return {
        products
    };
};
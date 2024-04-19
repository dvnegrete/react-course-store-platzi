export const ProductService = async () =>{
    try {
        const res = await fetch('https://api.escuelajs.co/api/v1/products');
        return res.json();
    } catch (error) {
        return error;
    }
}
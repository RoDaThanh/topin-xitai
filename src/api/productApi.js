import axiosClient from './axiosClient';

const productServiceUri = 'product-service/api';
const productApi = {

    getAllProducts(params) {
        const uri = `${[productServiceUri]}/products`;
        return axiosClient.get(uri,{params: params});
    },

    getProduct(id) {
        const uri = `${[productServiceUri]}/products/${id}`;
        return axiosClient.get(uri);
    },

};

export default productApi;